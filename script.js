document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const reviewForm = document.getElementById("reviewForm")
  const reviewText = document.getElementById("reviewText")
  const productName = document.getElementById("productName")
  const analyzeBtn = document.getElementById("analyzeBtn")
  const resultsSection = document.getElementById("resultsSection")
  const loader = document.getElementById("loader")
  const resultContent = document.getElementById("resultContent")
  const gaugeFill = document.getElementById("gaugeFill")
  const authenticityScore = document.getElementById("authenticityScore")
  const analysisText = document.getElementById("analysisText")
  const flagsList = document.getElementById("flagsList")
  const historyList = document.getElementById("historyList")

  // Add this at the beginning of the DOMContentLoaded event listener
  const enable3dCheckbox = document.getElementById("enable3d")

  // Load review history from localStorage
  loadHistory()

  // Form submission
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (!reviewText.value.trim()) {
      alert("Please enter a review to analyze.")
      return
    }

    // Show results section and loader
    resultsSection.classList.remove("hidden")
    loader.style.display = "block"
    resultContent.style.display = "none"

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: "smooth" })

    // Simulate API call with setTimeout
    setTimeout(() => {
      analyzeReview(reviewText.value, productName.value)
    }, 1500)
  })

  // Declare these variables to avoid undefined errors.  These would ideally be loaded from an external script.
  let loadThreeJS
  let initThreeJS
  let updateVisualization
  let cleanupThreeJS

  // Modify the analyzeReview function to include 3D visualization
  function analyzeReview(text, product) {
    // This is a simulated analysis - in a real app, this would call an API
    const result = simulateReviewAnalysis(text)

    // Update UI with results
    displayResults(result, text, product)

    // Update 3D visualization if enabled
    if (enable3dCheckbox.checked) {
      if (typeof loadThreeJS === "function") {
        loadThreeJS(() => {
          if (typeof initThreeJS === "function" && typeof updateVisualization === "function") {
            // Initialize Three.js if not already initialized
            if (!window.scene) {
              initThreeJS()
            }
            // Update the visualization with the score
            updateVisualization(result.score)
          }
        })
      }
    } else {
      // Clean up 3D resources if disabled
      if (typeof cleanupThreeJS === "function") {
        cleanupThreeJS()
      }
      // Remove 3D container if it exists
      const container = document.getElementById("3d-container")
      if (container) {
        container.remove()
      }
    }

    // Save to history
    saveToHistory(result, text, product)

    // Hide loader and show results
    loader.style.display = "none"
    resultContent.style.display = "block"
  }

  // Simulate review analysis
  function simulateReviewAnalysis(text) {
    // This is a simplified simulation of fake review detection
    // In a real application, this would be done by a backend service

    const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length
    const hasExtremeLanguage = /amazing|awesome|terrible|worst|best ever|changed my life/i.test(text)
    const hasRepeatedChars = /(.)\\1{3,}/i.test(text) // e.g., "sooooo"
    const hasLimitedVocabulary = wordCount < 20
    const hasExcessivePunctuation = (text.match(/!|\\?/g) || []).length > 3
    const hasAllCaps = text.toUpperCase() === text && text.length > 10

    // Calculate flags
    const flags = []
    if (hasExtremeLanguage) flags.push("Uses extreme or overly enthusiastic language")
    if (hasRepeatedChars) flags.push("Contains repeated characters for emphasis")
    if (hasLimitedVocabulary) flags.push("Very short review with limited detail")
    if (hasExcessivePunctuation) flags.push("Excessive punctuation")
    if (hasAllCaps) flags.push("Excessive use of capital letters")

    // Calculate authenticity score (0-100)
    let score = 100
    score -= flags.length * 15 // Each flag reduces score

    // Adjust based on review length
    if (wordCount < 10) score -= 20
    else if (wordCount > 50) score += 10

    // Ensure score is within 0-100 range
    score = Math.max(0, Math.min(100, score))

    // Generate analysis text
    let analysis = ""
    if (score >= 80) {
      analysis = "This review appears to be authentic. It uses natural language and provides specific details."
    } else if (score >= 50) {
      analysis = "This review has some characteristics of authentic reviews but also contains some suspicious patterns."
    } else {
      analysis = "This review contains multiple patterns commonly found in fake or manipulated reviews."
    }

    return {
      score: Math.round(score),
      analysis: analysis,
      flags: flags,
    }
  }

  // Display results in the UI
  function displayResults(result, text, product) {
    // Update score gauge
    gaugeFill.style.width = `${result.score}%`
    authenticityScore.textContent = result.score

    // Update analysis text
    analysisText.textContent = result.analysis

    // Update flags list
    flagsList.innerHTML = ""
    if (result.flags.length === 0) {
      flagsList.innerHTML = "<li>No suspicious patterns detected</li>"
    } else {
      result.flags.forEach((flag) => {
        const li = document.createElement("li")
        li.textContent = flag
        flagsList.appendChild(li)
      })
    }
  }

  // Save review to history
  function saveToHistory(result, text, product) {
    const history = JSON.parse(localStorage.getItem("reviewHistory") || "[]")

    // Add new review to history
    history.unshift({
      id: Date.now(),
      text: text,
      product: product || "Unnamed Product",
      score: result.score,
      date: new Date().toISOString(),
    })

    // Keep only the last 10 reviews
    if (history.length > 10) {
      history.pop()
    }

    // Save to localStorage
    localStorage.setItem("reviewHistory", JSON.stringify(history))

    // Update history UI
    loadHistory()
  }

  // Load and display review history
  function loadHistory() {
    const history = JSON.parse(localStorage.getItem("reviewHistory") || "[]")

    if (history.length === 0) {
      historyList.innerHTML = '<p class="empty-history">No reviews analyzed yet.</p>'
      return
    }

    historyList.innerHTML = ""

    history.forEach((item) => {
      const scoreClass = item.score >= 80 ? "score-high" : item.score >= 50 ? "score-medium" : "score-low"

      const historyItem = document.createElement("div")
      historyItem.className = "history-item"
      historyItem.innerHTML = `
                <div class="history-header">
                    <span class="history-product">${escapeHTML(item.product)}</span>
                    <span class="history-score ${scoreClass}">${item.score}% Authentic</span>
                </div>
                <p class="history-text">${escapeHTML(item.text)}</p>
                <small>${formatDate(item.date)}</small>
            `

      // Add click event to re-analyze this review
      historyItem.addEventListener("click", () => {
        reviewText.value = item.text
        productName.value = item.product !== "Unnamed Product" ? item.product : ""
        reviewForm.scrollIntoView({ behavior: "smooth" })
      })

      historyList.appendChild(historyItem)
    })
  }

  // Helper function to format date
  function formatDate(dateString) {
    const date = new Date(dateString)
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Helper function to escape HTML
  function escapeHTML(str) {
    const div = document.createElement("div")
    div.textContent = str
    return div.innerHTML
  }
})
