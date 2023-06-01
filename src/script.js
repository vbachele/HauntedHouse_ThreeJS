import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { LightningStrike } from 'three/examples/jsm/geometries/LightningStrike.js'
import thunderAudio from "/sound/thunder.mp3"

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
const bushColorTexture = textureLoader.load('/textures/bushes/Ground_Forest_002_baseColor.jpg')
const bushAmbientOcclusionTexture = textureLoader.load('/textures/bushes/Ground_Forest_002_ambientOcclusion.jpg')
const bushNormalTexture = textureLoader.load('/textures/bushes/Ground_Forest_002_normal.jpg')
const bushRoughnessTexture = textureLoader.load('/textures/bushes/Ground_Forest_002_roughness.jpg')
const bushHeightTexture = textureLoader.load('/textures/bushes/Ground_Forest_002_height.png')

// grave textures

const graveColorTexture = textureLoader.load('/textures/graves/Rock_047_BaseColor.jpg')
const graveAmbientOcclusionTexture = textureLoader.load('/textures/graves/Rock_047_AmbientOcclusion.jpg')
const graveNormalTexture = textureLoader.load('/textures/graves/Rock_047_Normal.jpg')
const graveRoughnessTexture = textureLoader.load('/textures/graves/Rock_047_Roughness.jpg')
const graveHeightTexture = textureLoader.load('/textures/graves/Rock_047_Height.png')

// roof textures

const roofColorTexture = textureLoader.load('/textures/roof/Rock_045_BaseColor.jpg')
const roofAmbientOcclusionTexture = textureLoader.load('/textures/roof/Rock_045_AmbientOcclusion.jpg')
const roofNormalTexture = textureLoader.load('/textures/roof/Rock_045_Normal.jpg')
const roofRoughnessTexture = textureLoader.load('/textures/roof/Rock_045_Roughness.jpg')
const roofHeightTexture = textureLoader.load('/textures/roof/Rock_045_Height.png')

roofColorTexture.repeat.set(8, 8);
roofAmbientOcclusionTexture.repeat.set(8, 8);
roofNormalTexture.repeat.set(8, 8);
roofRoughnessTexture.repeat.set(8, 8);
roofColorTexture.wrapS = THREE.RepeatWrapping;
roofAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
roofNormalTexture.wrapS = THREE.RepeatWrapping;
roofRoughnessTexture.wrapS = THREE.RepeatWrapping;
roofColorTexture.wrapT = THREE.RepeatWrapping;
roofAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;
roofNormalTexture.wrapT = THREE.RepeatWrapping;
roofRoughnessTexture.wrapT = THREE.RepeatWrapping;

// sky textures

const skyColorTexture = textureLoader.load('/textures/sky/sky3.png')
skyColorTexture.wrapS = THREE.RepeatWrapping;
skyColorTexture.wrapT = THREE.RepeatWrapping;
skyColorTexture.repeat.set(32, 32);

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
    new THREE.MeshStandardMaterial({
        map: roofColorTexture, // color texture
        aoMap: roofAmbientOcclusionTexture, // ambient occlusion texture (darken the corners)
        normalMap: roofNormalTexture, // normal texture (add some details)
        roughnessMap: roofRoughnessTexture, // roughness texture (add some roughness)
        displacementMap: roofHeightTexture, // displacement texture (add some depth) for the roof to be not flat
        displacementScale: 0.001, // scale of the displacement
     }),
)
roof.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(roof.geometry.attributes.uv.array, 2)) // add uv2 to the roof geometry
//round edges of the roof

roof.position.y = 2.5 + 0.5// 2.5 (walls height) + 0.5 (roof height) = 3
roof.rotation.y = Math.PI * 0.25
house.add(roof)

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
    map: bushColorTexture, // color texture
    aoMap: bushAmbientOcclusionTexture, // ambient occlusion texture (darken the corners)
    normalMap: bushNormalTexture, // normal texture (add some details)
    roughnessMap: bushRoughnessTexture, // roughness texture (add some roughness)
    displacementMap: bushHeightTexture, // displacement texture (add some depth) for the bush to be not flat
    displacementScale: 0.01, // scale of the displacement
})

bushGeometry.setAttribute('uv2', new THREE.Float32BufferAttribute(bushGeometry.attributes.uv.array, 2)) // add uv2 to the bush geometry

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
graveGeometry.setAttribute('uv2', new THREE.Float32BufferAttribute(graveGeometry.attributes.uv.array, 2)) // add uv2 to the grave geometry

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

// lightning strikes --- RAY LIGHTNING
const rayLightParameters = { 
    sourceoffset: new THREE.Vector3(0, -6, -150), // When ray starts
    destOffset: new THREE.Vector3(0, -5, -150), // When ray ends

    radius0: 1, // Radius main trunk at the start
    radius1: 0.1, // Radius main trunk at the end
    radius0factor: 0.5, // Radius of a subray;  = this factor * radius0 parent (Radius multiplier for the first subray)
    radius1factor: 0.2, // Radius multiplier for the second subray
    minRadius: 2, // Minimum radiusthat radius0 and radius1 can get
    maxIterations: 10, // Maximum number of iterations of rays ligtning

    isEternal: false, // If true, the ray will never disappear
    birthTime: 0.2, // Time at which the ray is created
    deathTime: 2, // Time at which the ray disappears
    timeScale: 0.7, // Speed of the ray
    propagationTimeFactor: 0.05, // Speed of the ray
    vanishingTimeFactor: 0.95, // lifetime factor at which ray ends the steady phase
    subrayPeriod: 1, // Time between subrays
    subrayDutyCycle: 0.6, // Percentage of time that the ray is active
    maxSubrayRecursion: 3, // Maximum number of subrays
    ramification: 7, // Number of subrays (children) per ray (parent)
    recursionProbability: 1, // Probability of a ray to generate a subray
    roughness: 0.85, // Roughness of the ray
    straightness: 0.65, // Straightness of the ray
}

// lightning strikes --- Mesh LIGHTNING


const lightningStrike = new LightningStrike(rayLightParameters)
const lightningStrikeMaterial = new THREE.MeshBasicMaterial({ color: 0xB0FFFF })
lightningStrikeMaterial.fog = false;
lightningStrikeMaterial.blending = THREE.AdditiveBlending;

const lightningStrikeMesh1 = new THREE.Mesh(lightningStrike, lightningStrikeMaterial)
lightningStrikeMesh1.position.set(30, 0, -30);
lightningStrikeMesh1.scale.set(0.1, 0.15, 0.1);

const lightningStrikeMesh2 = new THREE.Mesh(lightningStrike, lightningStrikeMaterial)
lightningStrikeMesh2.position.set(-10, 0, -50);
lightningStrikeMesh2.scale.set(0.1, 0.15, 0.1);

const lightningStrikeMesh3 = new THREE.Mesh(lightningStrike, lightningStrikeMaterial)
lightningStrikeMesh3.position.set(-20, 0, 20);
lightningStrikeMesh3.scale.set(0.1, 0.15, 0.1);

const lightningStrikeMesh4 = new THREE.Mesh(lightningStrike, lightningStrikeMaterial)
lightningStrikeMesh4.position.set(50, 0, 20);
lightningStrikeMesh4.scale.set(0.1, 0.15, 0.1);

scene.add(lightningStrikeMesh1, lightningStrikeMesh2, lightningStrikeMesh3, lightningStrikeMesh4);

// skyParticles
let cloudParticles = [];

// SkyCloud

const skyGeometry = new THREE.PlaneGeometry( Math.random() * 500,  Math.random() *500);
const skyMaterial = new THREE.MeshLambertMaterial({ 
    map: skyColorTexture,
    transparent: true,
});
skyMaterial.fog = false;

for (let i = 0; i < 25; i++) { // create meshes and position randomly
    let cloud = new THREE.Mesh(skyGeometry, skyMaterial);
    cloud.position.set(
        Math.random() * 300 + 10,
        100,
        Math.random() * 101 - 200,
    );
    cloud.scale.set(1.5, 1.5, 1.5);
    cloud.rotation.x = 1.16;
    cloud.rotation.y = - 0.12;
    // cloud.rotation.z = Math.random();
    cloud.material.opacity = 0.6;
    cloudParticles.push(cloud);
    scene.add(cloud);
}

// rainParticles

// let rainCount = 1500;

// let rainGeometry = new THREE.BufferGeometry();
// for (let i = 0; i < rainCount; i++) {
//     let rainDrop = new THREE.Vector3(
//         Math.random() * 400 - 200,
//         Math.random() * 500 - 250,
//         Math.random() * 400 - 200,
//     );
//     rainGeometry.Buffer.push(rainDrop);
// }
// const rainMaterial = new THREE.PointsMaterial({
//     color: 0xaaaaaa,
//     transparent: true,
//     size: 0.1,
// });
// const rainMeshParticles = new THREE.Points(rainGeometry, rainMaterial);
// scene.add(rainMeshParticles);



/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#94979A', 0.12)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#94979A', 0.12)
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

// flashing light

const flash = new THREE.PointLight(0x062d89, 30, 500, 1.7);
flash.position.set(30, 99, -30);
scene.add(flash);
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


/**
 * Sounds
 */

const listener = new THREE.AudioListener();
camera.add(listener);

const thunder = new THREE.Audio(listener);

const audioLoader = new THREE.AudioLoader();
audioLoader.load(thunderAudio, function (buffer) {
    thunder.setBuffer(buffer);
    thunder.setLoop(false);
    thunder.setVolume(0.5);
    thunder.play();
});
scene.add(thunder);
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
let isDoorLightSpookey = true
let ActiveLightningStrike = false;

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime();

    // cloud particles 

    // cloudParticles.forEach(p => {
    //     p.rotation.z = 0.001;
    // });
    // lightning strikes
    lightningStrike.update(elapsedTime * 0.1);
    if (elapsedTime > 2 && elapsedTime < 12) {
    if (Math.random() > 0.93 || flash.power > 100 || elapsedTime < 5) {
        if (flash.power < 100) {
                flash.position.set(
                    Math.random() * -30,
                    98 + Math.random(),
                    Math.random() * 30
                );
            }
            flash.power = 50 + Math.random() * 500;
        }
    } else {
        flash.power = 0;
    }
    if (elapsedTime > 12) {
        scene.remove(lightningStrikeMesh1, lightningStrikeMesh2, lightningStrikeMesh3);

    }


    // animate the door light
    const doorLightBlinkDelay = Math.floor((Math.random() + 0.8) * 3)
    const doorLightBlinkTimer = Math.floor(elapsedTime) % doorLightBlinkDelay === 0
    if (doorLightBlinkTimer && isDoorLightSpookey){
        doorLight.distance = (Math.random()) * 10
    }

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