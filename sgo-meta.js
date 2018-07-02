const colors = [
  'Red',
  'Green',
  'Blue',
  'Alpha',
]
const vector = [
  'X',
  'Y',
  'Z',
]

const soundEffect = [
  null,
  'SoundName',
]

const hammerChargeParameters = [
  'ChargeTime',
  'ChargeAnimation',
  'ChargeAnimationSpeed',
  'AmmoDamageFactor',
  'AmmoSize',
  'AmmoAlive',
  'AmmoClass',
]

const vehicleWeaponParameters = [
  'Vehicle_WeaponConfig',
  'Vehicle_WeaponStrengthParameter',
]

const ammoClasses = {
  BombBullet01: [
    'BombMobility',
    'IsDetector',
     null,
     'PrimerDelay',
     null,
     'LedPosition',
     'BombExplosionType',
     'SplendorParameter',
  ],
  GrenadeBullet01: [
    'IsBouncy',
    null,
    null,
    'BounceDampening',
    'SmokeTrailSpeed',
    'SmokeTrailAlive',
  ],
  LaserBullet01: [
    'FlareColour',
    'FlareLightColour',
    'FlareScale',
    'FlareLightScale',
    'FlareLife',
    'NumLasers',
    null,
    null,
    'LaserSpreadSpeed',
    'LaserSpeed',
    'LaserSegments',
  ],
  LaserBullet02: [
    'LaserType'
   ],
  LightningBullet01: [
    'InitialNoise',
    'Random_Velocity',
    'CurveNoise',
    'BounceFactor',
    'Modifier',
  ],
  MissileBullet02: [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    'FireSe',
    null,
    null,
    null,
    'SubMissiles',
  ],
  NapalmBullet01: [
    null,
    null,
    null,
    'SubProjectileSize',
    'EmitterParameter',
    'EmitterSe',
  ],
  SentryGunBullet01: [
    null,
    null,
    null,
    null,
    'SearchRange',
    'TurnSpeed',
    null,
    null,
    'AmmoClass',
    'AmmoCount',
    'AmmoSize',
    'Ammo_CustomParameter',
    'FireSe',
  ],
  ShockWaveBullet01: [
    'ShockWaveType',
  ],
  SmokeCandleBullet01: [
    "SmokeSpread",
    "SmokeSize",
    "SummonDelay",
    "SummonType",
    "Summon_CustomParameter",
  ],
  SolidBullet01: [
    'IsBouncy',
   ],
  Summon_CustomParameter00: [
    null,
    null,
    'ArtilleryCount',
    'ArtilleryInterval',
    'ArtilleryClass',
    null,
    null,
    null,
    null,
    null,
    null,
    'ArtilleryColor',
  ],
  Summon_CustomParameter00: [
    'TransporterConfig',
    'ContainerConfig',
    'VehicleConfig',
    'Vehicle_CustomParameter',
  ],
  Summon_CustomParameter02: [
    'PlaneModel',
    'PlaneCount',
    'PlaneInterval',
    'PlaneElevation',
    'PlaneSpeed',
    'OriginFactor',
    'DropDistance',
    'FormationAngle',
    'FormationType',
    'Formation_CustomParameter',
    'BombingPayloadParameter',
    'BombingPayloadModel',
  ],
  Vehicle_CustomParameter: [
    'Vehicle_StrengthParameter',
    'Vehicle_MobilityParameter',
    'Vehicle_WeaponParameter',
  ],
  Vehicle_StrengthParameter: [
    'Vehicle_HealthFactor',
    'Vehicle_DamageFactor',
  ],
  Vehicle_MobilityParameter: [
    'Vehicle_Grip',
    'Vehicle_Acceleration',
    'Vehicle_Weight',
    'Vehicle_TurnRate',
    'Vehicle_TurnFriction',
  ],
  Vehicle_WeaponParameter: [
    'Vehicle_Weapon0',
    'Vehicle_Weapon1',
    'Vehicle_Weapon2',
    'Vehicle_Weapon3',
  ],
  Vehicle_Weapon0: vehicleWeaponParameters,
  Vehicle_Weapon1: vehicleWeaponParameters,
  Vehicle_Weapon2: vehicleWeaponParameters,
  Vehicle_Weapon3: vehicleWeaponParameters,
  Vehicle_WeaponStrengthParameters: [
    'Vehicle_WeaponRecoil',
    'Vehicle_WeaponLift',
    'Vehicle_WeaponAimSpeed',
  ],
}

const ObjectClasses = {
  Weapon_ImpactHammer: [
    null,
    null,
    'DamageReduction',
    'HammerChargeParameters',
  ],
  Weapon_Gatling: [
    'RecoilAnimation',
    null,
    null,
    null,
    'RecoilVector',
    null,
    null,
    'WindupTime',
  ],
}

const names = {
  ammoClasses: ammoClasses,
  AmmoColor: colors,
  ArtilleryColor: colors,
  LedPosition: colors,
  FlareColour: colors,
  FlareLightColour: colors,
  BombingPayloadParameter: [
    null,
    null,
    'BombingPayloadCount',
    'BombingPayloadInterval',
    'BombingPayloadClass',
    'BombingPayloadSpeed',
    'BombingPayloadInitialUpSpeed',
    'BombingPayloadSpriteSize',
    'BombingPayloadHitboxSize?',
    'BombingPayloadExplosion',
    'BombingPayloadAlive',
    null,
    'BombingPayloadColor',
    'BombingPayloadCustomParameter',
    'BombingPayloadModel',
    'BombingPayloadDelay',
    null,
    null,
    null,
  ],
  EmitterParameter: [
    null,
    null,
    'EmitterAmmoCount',
    'EmitterInterval',
    'EmitterAmmoClass',
    null,
    null,
    null,
    null,
    null,
    'EmitterAmmoSize',
  ],
  SplendorParameter: [
    'FlechetteSpread',
    'SearchRange',
    'FlechetteCount',
    'FlechetteAlive',
    'FlechetteSpeed',
    'FlechetteSize',
  ],
  FlechetteSpread: [
    'Horizontal',
    'Vertical',
    'VerticalOffset',
  ],
  HammerChargeParameters: [
    'BasicCharge',
    'HighVoltageCharge',
    'MaximumCharge'
  ],
  BasicCharge: hammerChargeParameters,
  HighVoltageCharge: hammerChargeParameters,
  MaximumCharge: hammerChargeParameters,
  SubMissiles: [
    null,
    null,
    'SubAmmoCount',
    null,
    'AmmoClass',
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    'AmmoColor',
    'Ammo_CustomParameter',
    'ModelName',
    null,
    null,
    null,
    'FireSe',
    'MuzzleFlash',
    'MuzzleFlash_CustomParameter',
  ],
  AmmotHitSe: soundEffect,
  FireSe: soundEffect,
  EmitterSe: soundEffect,
  name: [
   'Japanese',
   'English',
   'Chinese',
  ],
  resource: [
   'path',
  ],
}

const ammoClassOptions = [
  'LightningBullet01',
  'LaserBullet01',
  'LaserBullet02',
  'LaserBullet03',
  'FlameBullet01',
  'FlameBullet02',
  'SpiderStringBullet01',
  'SpiderStringBullet02',
  'ShockWaveBullet01',
  'SlashWaveBullet01',
  'HomingLaserBullet01',
  'BeamBullet01',
  'DecoyBullet01',
  'NeedleBullet01',
  'BarrierBullet01',
  'ClusterBullet01',
  'AcidBullet01',
  'NapalmBullet01',
  'GrenadeBullet01',
  'MissileBullet01',
  'MissileBullet02',
  'RocketBullet01',
  'RocketBullet02',
  'SolidBullet01',
  'SolidBullet02',
  'SmokeCandleBullet01',
  'ShieldBashBullet01',
  'SentryGunBullet01',
  'TargetMarkerBullet01',
  'SupportUnitBullet01',
  'PileBunkerBullet01',
  'PlasmaBullet01',
]

const values = {
  AmmoClass: ammoClassOptions,
  BombExplosionType: {
    'Explosion': 0,
    'Shrapnel': 1,
    'Burst': 2,
  },
  SecondaryFire_Type: {
    'None': 0,
    'Zoom': 1,
    'Activate': 2,
    'Activate and Reload': 3,
    'Jumpjets (Fencer)': 4,
    'Dash (Fencer)': 5,
    'Shield Reflect (Fencer)': 6,
  },
  BombMobility: {
    'None': 0,
    'Roll': 1,
    'Bounce': 2,
  },
  BombingPathType: {
    'Carpet Formation': 0,
    'Fan Formation': 1,
  },
  FireSpreadtype: {
    'Normal': 0,
    'Wide': 1,
    'Wide and Even': 2,
    'Tall': 3,
  },
  ShocWaveType: {
    'Shockwave': 0,
    'Shockwave and Gravel': 1,
    'Gravel': 2,
  }
}

module.exports = {names, values}
