import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')


// Scene
const scene = new THREE.Scene()

//Fog
const Fog = new THREE.Fog('#262837', 1, 15)
scene.fog = Fog


/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

// door textures
const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')

// bricks textures
const bricksColorTexture = textureLoader.load('/textures/bricks/color.jpg')
const bricksAmbientOcclusionTexture = textureLoader.load('/textures/bricks/ambientOcclusion.jpg')
const bricksNormalTexture = textureLoader.load('/textures/bricks/normal.jpg')
const bricksRoughnessTexture = textureLoader.load('/textures/bricks/roughness.jpg')

// grass textures
const grassColorTexture = textureLoader.load('/textures/grass/color.jpg')
const grassAmbientOcclusionTexture = textureLoader.load('/textures/grass/ambientOcclusion.jpg')
const grassNormalTexture = textureLoader.load('/textures/grass/normal.jpg')
const grassRoughnessTexture = textureLoader.load('/textures/grass/roughness.jpg')

grassColorTexture.repeat.set(8, 8);
grassAmbientOcclusionTexture.repeat.set(8, 8);
grassNormalTexture.repeat.set(8, 8);
grassRoughnessTexture.repeat.set(8, 8);
grassColorTexture.wrapS = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
grassNormalTexture.wrapS = THREE.RepeatWrapping;
grassRoughnessTexture.wrapS = THREE.RepeatWrapping;

grassColorTexture.wrapT = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;
grassNormalTexture.wrapT = THREE.RepeatWrapping;
grassRoughnessTexture.wrapT = THREE.RepeatWrapping;

// bush textures
const bushColorTexture = textureLoader.load('/textures/bushes/azalea_leaves_bushy_1.png')
bushColorTexture.repeat.set(16, 16);
bushColorTexture.wrapS = THREE.RepeatWrapping;
bushColorTexture.wrapT = THREE.RepeatWrapping;

const BushbranchColorTexture = textureLoader.load('/textures/bushes/azalea_branch.png') 

// grave textures

const graveColorTexture = textureLoader.load('/textures/graves/Rock_047_BaseColor.jpg')
const graveAmbientOcclusionTexture = textureLoader.load('/textures/graves/Rock_047_AmbientOcclusion.jpg')
const graveNormalTexture = textureLoader.load('/textures/graves/Rock_047_Normal.jpg')
const graveRoughnessTexture = textureLoader.load('/textures/graves/Rock_047_Roughness.jpg')
const graveHeightTexture = textureLoader.load('/textures/graves/Rock_047_Height.png')


/**
 * House
 */

const house = new THREE.Group()
scene.add(house)

// Walls

const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4, 2.5 ,4),
    new THREE.MeshStandardMaterial({ 
        map: bricksColorTexture, // color texture
        aoMap: bricksAmbientOcclusionTexture, // ambient occlusion texture (darken the corners)
        normalMap: bricksNormalTexture, // normal texture (add some details)
        roughnessMap: bricksRoughnessTexture, // roughness texture (add some roughness)
     }),
)
walls.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2)) // add uv2 to the walls geometry
walls.position.y = 1.25 // 2.5 / 2  = 1.25  (half of the height)
house.add(walls)

// Roof

const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5, 1, 4),
    new THREE.MeshStandardMaterial({ color: '#b35f45' }),
)
roof.position.y = 1.25 + 0.5// 2.5 (walls height) + 0.5 (roof height) = 3
roof.rotation.y = Math.PI * 0.25
walls.add(roof)

//door
const door = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2, 2.2, 100, 100),
    new THREE.MeshStandardMaterial({
        map: doorColorTexture, // color texture
        alphaMap: doorAlphaTexture, // alpha texture
        transparent: true, // make texture transparent to be sure to have the right door
        aoMap: doorAmbientOcclusionTexture, // ambient occlusion texture (darken the corners)
        displacementMap: doorHeightTexture, // displacement texture (add some depth) for the door to be not flat
        displacementScale: 0.1, // scale of the displacement
        normalMap: doorNormalTexture, // normal texture (add some details)
        metalnessMap: doorMetalnessTexture, // metalness texture (add some metalness)
        roughnessMap: doorRoughnessTexture, // roughness texture (add some roughness)
    }),
)
door.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2)) // add uv2 to the door geometry
door.position.y = 1// 1 (walls height) - 0.5 (door height) = 0.5
door.position.z = 2 + 0.01 // 2 (walls depth) + 0.01 (door depth) = 2.01
house.add(door)

// bush

const bushGeometry = new THREE.SphereGeometry(1, 16, 16)
const bushMaterial = new THREE.MeshStandardMaterial({
    map: bushColorTexture,
    displacementMap: BushbranchColorTexture,
    displacementScale: 0.1, // scale of the displacement

    
})

const bush1 = new THREE.Mesh(bushGeometry, bushMaterial)
bush1.scale.set(0.5, 0.5, 0.5)
bush1.position.set(0.8, 0.2, 2.2)

const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)
bush2.scale.set(0.25, 0.25, 0.25)
bush2.position.set(1.4, 0.1, 2.1)

const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
bush3.scale.set(0.4, 0.4, 0.4);
bush3.position.set(- 0.8, 0.1, 2.2);

const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
bush4.scale.set(0.15, 0.15, 0.15);
bush4.position.set(- 1, 0.05, 2.6);

house.add(bush1, bush2, bush3, bush4)

//graveyard

const graves = new THREE.Group()
scene.add(graves)

const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
const graveMaterial = new THREE.MeshStandardMaterial({
    map: graveColorTexture,
    aoMap: graveAmbientOcclusionTexture,
    normalMap: graveNormalTexture,
    roughnessMap: graveRoughnessTexture,
    displacementMap: graveHeightTexture,
    displacementScale: 0.01,
});

for (let i = 0; i < 50; i++) {
    const angle = Math.random() * Math.PI * 2; // random angle between 0 and 2PI
    const radius = 3 + Math.random() * 6; // random radius between 3 and 9
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    

    const grave = new THREE.Mesh(graveGeometry, graveMaterial);
    grave.position.set(x, 0.3, z);
    grave.rotation.y = (Math.random() - 0.5) * 0.4; // random rotation between -0.2 and 0.2
    grave.rotation.z = (Math.random() - 0.5) * 0.4; // random rotation between -0.2 and 0.2
    grave.castShadow = true // enable shadow
    graves.add(grave);

}


// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({
        map: grassColorTexture, // color texture
        aoMap: grassAmbientOcclusionTexture, // ambient occlusion texture (darken the corners)
        normalMap: grassNormalTexture, // normal texture (add some details)
        roughnessMap: grassRoughnessTexture, // roughness texture (add some roughness)
    })
)
floor.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2)) // add uv2 to the floor geometry
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
scene.add(floor)

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.12)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.12)
moonLight.position.set(4, 5, - 2)
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
scene.add(moonLight)

// Door light
const doorLight = new THREE.PointLight('#ff7d46', 1, 7)
doorLight.position.set(0, 2.2, 2.7)
house.add(doorLight)

// Ghost light
const ghost1 = new THREE.PointLight('#ff00ff', 2, 3)
scene.add(ghost1)

const ghost2 = new THREE.PointLight('#00ffff', 2, 3)
scene.add(ghost2)

const ghost3 = new THREE.PointLight('#ffff00', 2, 3)
scene.add(ghost3)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor('#262837')

// Shadows


renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

moonLight.castShadow = true // enable shadow
doorLight.castShadow = true // enable shadow
ghost1.castShadow = true // enable shadow
ghost2.castShadow = true // enable shadow
ghost3.castShadow = true // enable shadow

walls.castShadow = true // enable shadow
bush1.castShadow = true // enable shadow
bush2.castShadow = true // enable shadow
bush3.castShadow = true // enable shadow
bush4.castShadow = true // enable shadow

floor.receiveShadow = true // enable shadow

// Door shadow
doorLight.shadow.mapSize.width = 256
doorLight.shadow.mapSize.height = 256
doorLight.shadow.camera.far = 7

// Ghost shadow
ghost1.shadow.mapSize.width = 256
ghost1.shadow.mapSize.height = 256
ghost1.shadow.camera.far = 7

ghost2.shadow.mapSize.width = 256
ghost2.shadow.mapSize.height = 256
ghost2.shadow.camera.far = 7

ghost3.shadow.mapSize.width = 256
ghost3.shadow.mapSize.height = 256
ghost3.shadow.camera.far = 7

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update Ghosts

    const ghost1Angle = elapsedTime * 0.5
    ghost1.position.x = Math.cos(ghost1Angle) * 4
    ghost1.position.z = Math.sin(ghost1Angle) * 4
    ghost1.position.y = Math.sin(elapsedTime * 3)

    const ghost2Angle = - elapsedTime * 0.32
    ghost2.position.x = Math.cos(ghost2Angle) * 5 
    ghost2.position.z = Math.sin(ghost2Angle) * 5 // 5 is the radius of the ghost movement on the z axis (left and right)
    ghost2.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5) // 2.5 is the speed of the ghost movement on the y axis (up and down) 

    const ghost3Angle = - elapsedTime * 0.18
    ghost3.position.x = Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32))
    ghost3.position.z = Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5))
    ghost3.position.y = Math.sin(elapsedTime * 5) + Math.sin(elapsedTime * 2)


    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()