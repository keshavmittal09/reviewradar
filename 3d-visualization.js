// Enhanced 3D Visualization for Fake Review Detector
// This file adds advanced 3D visualizations to represent review authenticity

// Create a new section in the HTML to hold our 3D scene
function setupScene() {
  // Create the 3D container if it doesn't exist
  if (!document.getElementById("3d-container")) {
    const resultsSection = document.getElementById("resultsSection")
    const container = document.createElement("div")
    container.id = "3d-container"
    container.style.width = "100%"
    container.style.height = "350px"
    container.style.marginTop = "2rem"
    container.style.marginBottom = "2rem"
    container.style.borderRadius = "var(--border-radius)"
    container.style.overflow = "hidden"

    // Insert the container at the top of the results section
    if (resultsSection.firstChild) {
      resultsSection.insertBefore(container, resultsSection.firstChild)
    } else {
      resultsSection.appendChild(container)
    }
  }

  return document.getElementById("3d-container")
}

// Initialize Three.js scene
let scene, camera, renderer, badge, particles, light, controls
let animationId = null
let badgeModel = null
let stars = []

function initThreeJS() {
  const container = setupScene()

  // Create scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf5f7fa)

  // Create camera
  const width = container.clientWidth
  const height = container.clientHeight
  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
  camera.position.z = 5
  camera.position.y = 1

  // Create renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  container.innerHTML = ""
  container.appendChild(renderer.domElement)

  // Add OrbitControls if available
  if (THREE.OrbitControls) {
    controls = new THREE.OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.7
    controls.enableZoom = true
    controls.minDistance = 3
    controls.maxDistance = 10
  }

  // Add responsive resize
  const onWindowResize = () => {
    const width = container.clientWidth
    const height = container.clientHeight
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }

  window.addEventListener("resize", onWindowResize)

  // Add lighting
  setupLighting()

  // Add floor
  createFloor()

  // Create badge model
  createBadgeModel()

  // Create particles
  createParticles(50)

  // Create stars
  createStars(100)

  // Start animation
  animate()
}

// Setup lighting for the scene
function setupLighting() {
  // Ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
  scene.add(ambientLight)

  // Main directional light (sun-like)
  light = new THREE.DirectionalLight(0xffffff, 0.8)
  light.position.set(5, 10, 7)
  light.castShadow = true

  // Configure shadow properties
  light.shadow.mapSize.width = 1024
  light.shadow.mapSize.height = 1024
  light.shadow.camera.near = 0.5
  light.shadow.camera.far = 50
  light.shadow.camera.left = -10
  light.shadow.camera.right = 10
  light.shadow.camera.top = 10
  light.shadow.camera.bottom = -10

  scene.add(light)

  // Add a soft fill light from the opposite side
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.3)
  fillLight.position.set(-5, 3, -5)
  scene.add(fillLight)
}

// Create a floor/ground
function createFloor() {
  const floorGeometry = new THREE.CircleGeometry(10, 32)
  const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0xf0f0f0,
    roughness: 0.8,
    metalness: 0.2,
  })

  const floor = new THREE.Mesh(floorGeometry, floorMaterial)
  floor.rotation.x = -Math.PI / 2
  floor.position.y = -1.5
  floor.receiveShadow = true
  scene.add(floor)
}

// Create a badge/shield model
function createBadgeModel() {
  // Create a group to hold the badge parts
  badgeModel = new THREE.Group()

  // Create the shield base
  const shieldGeometry = new THREE.CylinderGeometry(1, 0.8, 0.2, 32)
  const shieldMaterial = new THREE.MeshStandardMaterial({
    color: 0x4f46e5,
    roughness: 0.3,
    metalness: 0.7,
  })

  const shield = new THREE.Mesh(shieldGeometry, shieldMaterial)
  shield.castShadow = true
  shield.receiveShadow = true
  badgeModel.add(shield)

  // Create the shield emblem
  const emblemGeometry = new THREE.TorusGeometry(0.5, 0.1, 16, 32)
  const emblemMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.2,
    metalness: 0.8,
  })

  const emblem = new THREE.Mesh(emblemGeometry, emblemMaterial)
  emblem.position.y = 0.15
  emblem.rotation.x = Math.PI / 2
  emblem.castShadow = true
  emblem.receiveShadow = true
  badgeModel.add(emblem)

  // Create a checkmark in the middle
  const checkmarkGroup = new THREE.Group()

  const checkmark1Geometry = new THREE.CylinderGeometry(0.05, 0.05, 0.4, 8)
  const checkmark1Material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.2,
    metalness: 0.8,
  })

  const checkmark1 = new THREE.Mesh(checkmark1Geometry, checkmark1Material)
  checkmark1.position.set(-0.15, 0.15, 0)
  checkmark1.rotation.z = Math.PI / 4
  checkmark1.castShadow = true
  checkmarkGroup.add(checkmark1)

  const checkmark2Geometry = new THREE.CylinderGeometry(0.05, 0.05, 0.6, 8)
  const checkmark2 = new THREE.Mesh(checkmark2Geometry, checkmark1Material)
  checkmark2.position.set(0.1, 0.15, 0)
  checkmark2.rotation.z = -Math.PI / 4
  checkmark2.castShadow = true
  checkmarkGroup.add(checkmark2)

  badgeModel.add(checkmarkGroup)

  // Add the badge to the scene
  badgeModel.scale.set(1.2, 1.2, 1.2)
  badgeModel.position.y = 0
  scene.add(badgeModel)

  // Create a badge for fake reviews (X mark)
  badge = badgeModel
}

// Create particles system
function createParticles(count) {
  // Remove existing particles if any
  if (particles) {
    scene.remove(particles)
  }

  const particleGeometry = new THREE.BufferGeometry()
  const particlePositions = []

  for (let i = 0; i < count; i++) {
    const radius = 2 + Math.random() * 2
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI

    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = radius * Math.sin(phi) * Math.sin(theta)
    const z = radius * Math.cos(phi)

    particlePositions.push(x, y, z)
  }

  particleGeometry.setAttribute("position", new THREE.Float32BufferAttribute(particlePositions, 3))

  const particleMaterial = new THREE.PointsMaterial({
    color: 0x4f46e5,
    size: 0.15,
    transparent: true,
    opacity: 0.7,
    map: createParticleTexture(),
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })

  particles = new THREE.Points(particleGeometry, particleMaterial)
  scene.add(particles)
}

// Create a texture for particles
function createParticleTexture() {
  const canvas = document.createElement("canvas")
  canvas.width = 32
  canvas.height = 32

  const context = canvas.getContext("2d")
  const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16)
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

  context.fillStyle = gradient
  context.fillRect(0, 0, 32, 32)

  const texture = new THREE.CanvasTexture(canvas)
  return texture
}

// Create star field in the background
function createStars(count) {
  // Clear existing stars
  stars.forEach((star) => scene.remove(star))
  stars = []

  const starGeometry = new THREE.SphereGeometry(0.05, 8, 8)
  const starMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
  })

  for (let i = 0; i < count; i++) {
    const star = new THREE.Mesh(starGeometry, starMaterial)

    // Position stars in a large sphere around the scene
    const radius = 15 + Math.random() * 10
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI

    star.position.x = radius * Math.sin(phi) * Math.cos(theta)
    star.position.y = radius * Math.sin(phi) * Math.sin(theta)
    star.position.z = radius * Math.cos(phi)

    // Random scale for variety
    const scale = 0.5 + Math.random() * 1.5
    star.scale.set(scale, scale, scale)

    scene.add(star)
    stars.push(star)
  }
}

// Animation loop
function animate() {
  animationId = requestAnimationFrame(animate)

  if (badgeModel) {
    badgeModel.rotation.y += 0.01
  }

  if (particles) {
    particles.rotation.y += 0.002
  }

  // Animate stars twinkling
  stars.forEach((star, index) => {
    const time = Date.now() * 0.001
    const twinkle = Math.sin(time + index) * 0.5 + 0.5
    star.material.opacity = 0.3 + twinkle * 0.7
  })

  // Update controls if they exist
  if (controls) {
    controls.update()
  }

  renderer.render(scene, camera)
}

// Update 3D visualization based on authenticity score
function updateVisualization(score) {
  if (!scene || !badgeModel) return

  // Map score (0-100) to a color gradient (red to yellow to green)
  let color
  if (score < 50) {
    // Red to yellow gradient
    const t = score / 50
    color = new THREE.Color(1, t, 0)
  } else {
    // Yellow to green gradient
    const t = (score - 50) / 50
    color = new THREE.Color(1 - t, 1, 0)
  }

  // Update badge color
  if (badgeModel.children[0]) {
    badgeModel.children[0].material.color = color
  }

  // Update badge scale based on score
  const baseScale = 1.2
  const scaleBoost = (score / 100) * 0.8
  badgeModel.scale.set(baseScale + scaleBoost, baseScale + scaleBoost, baseScale + scaleBoost)

  // Update particles
  const particleCount = Math.floor(score / 2) + 30 // 30-80 particles
  createParticles(particleCount)

  // Update particle color
  if (particles) {
    particles.material.color = color
    particles.material.size = 0.1 + score / 500 // Size increases with score
  }

  // Update star count based on score
  const starCount = Math.floor(score / 2) + 50 // 50-100 stars
  createStars(starCount)

  // Add a pulse effect
  animatePulse()

  // Add floating text with the score
  createFloatingScore(score)
}

// Create floating score text
function createFloatingScore(score) {
  // Remove existing score text if any
  scene.children.forEach((child) => {
    if (child.userData && child.userData.isScoreText) {
      scene.remove(child)
    }
  })

  // Create canvas for text
  const canvas = document.createElement("canvas")
  canvas.width = 256
  canvas.height = 128

  const context = canvas.getContext("2d")
  context.fillStyle = "rgba(0, 0, 0, 0)"
  context.fillRect(0, 0, canvas.width, canvas.height)

  // Draw text
  context.font = "bold 60px Arial"
  context.textAlign = "center"
  context.textBaseline = "middle"

  // Choose color based on score
  if (score >= 80) {
    context.fillStyle = "#10b981" // Green
  } else if (score >= 50) {
    context.fillStyle = "#f59e0b" // Yellow
  } else {
    context.fillStyle = "#ef4444" // Red
  }

  context.fillText(score + "%", canvas.width / 2, canvas.height / 2)

  // Create texture from canvas
  const texture = new THREE.CanvasTexture(canvas)

  // Create material with the texture
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
  })

  // Create sprite with the material
  const sprite = new THREE.Sprite(material)
  sprite.scale.set(2, 1, 1)
  sprite.position.set(0, 1.8, 0)
  sprite.userData = { isScoreText: true }

  scene.add(sprite)
}

// Pulse animation effect
function animatePulse() {
  if (!badgeModel) return

  let scale = 1
  let growing = true
  let pulseCount = 0
  const baseScale = badgeModel.scale.x

  function pulse() {
    if (growing) {
      scale += 0.01
      if (scale >= 1.1) growing = false
    } else {
      scale -= 0.01
      if (scale <= 1) {
        growing = true
        pulseCount++
      }
    }

    if (badgeModel) {
      badgeModel.scale.set(baseScale * scale, baseScale * scale, baseScale * scale)
    }

    if (pulseCount < 3) {
      requestAnimationFrame(pulse)
    } else {
      // Reset to base scale
      badgeModel.scale.set(baseScale, baseScale, baseScale)
    }
  }

  pulse()
}

// Clean up resources
function cleanupThreeJS() {
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }

  if (renderer) {
    renderer.dispose()
  }

  // Remove event listeners
  window.removeEventListener("resize", onWindowResize)

  // Clear references
  scene = null
  camera = null
  renderer = null
  badgeModel = null
  particles = null
  stars = []
  controls = null
}

// Load Three.js library and OrbitControls dynamically
function loadThreeJS(callback) {
  if (window.THREE) {
    // Load OrbitControls if Three.js is already loaded
    loadOrbitControls(() => {
      callback()
    })
    return
  }

  const script = document.createElement("script")
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
  script.onload = () => {
    // Load OrbitControls after Three.js is loaded
    loadOrbitControls(() => {
      callback()
    })
  }
  document.head.appendChild(script)
}

// Load OrbitControls
function loadOrbitControls(callback) {
  if (window.THREE && window.THREE.OrbitControls) {
    callback()
    return
  }

  const script = document.createElement("script")
  script.src = "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.min.js"
  script.onload = callback
  document.head.appendChild(script)
}

// Initialize when the page loads
document.addEventListener("DOMContentLoaded", () => {
  // Load Three.js library
  loadThreeJS(() => {
    console.log("Three.js and OrbitControls loaded successfully")
    initThreeJS()
  })
})
