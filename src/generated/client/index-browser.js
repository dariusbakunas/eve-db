
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.6.1
 * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
 */
Prisma.prismaVersion = {
  client: "4.6.1",
  engine: "694eea289a8462c80264df36757e4fdc129b1b32"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AgtAgentTypesScalarFieldEnum = makeEnum({
  agentTypeID: 'agentTypeID',
  agentType: 'agentType'
});

exports.Prisma.AgtAgentsInSpaceScalarFieldEnum = makeEnum({
  agentID: 'agentID',
  dungeonID: 'dungeonID',
  solarSystemID: 'solarSystemID',
  spawnPointID: 'spawnPointID',
  typeID: 'typeID'
});

exports.Prisma.AgtAgentsScalarFieldEnum = makeEnum({
  agentID: 'agentID',
  divisionID: 'divisionID',
  corporationID: 'corporationID',
  locationID: 'locationID',
  level: 'level',
  quality: 'quality',
  agentTypeID: 'agentTypeID',
  isLocator: 'isLocator'
});

exports.Prisma.AgtResearchAgentsScalarFieldEnum = makeEnum({
  agentID: 'agentID',
  typeID: 'typeID'
});

exports.Prisma.AllianceScalarFieldEnum = makeEnum({
  id: 'id',
  creatorCorporationId: 'creatorCorporationId',
  creatorId: 'creatorId',
  name: 'name',
  dateFounded: 'dateFounded',
  executorCorporationId: 'executorCorporationId',
  factionId: 'factionId',
  ticker: 'ticker'
});

exports.Prisma.CertCertsScalarFieldEnum = makeEnum({
  certID: 'certID',
  description: 'description',
  groupID: 'groupID',
  name: 'name'
});

exports.Prisma.CharacterScalarFieldEnum = makeEnum({
  id: 'id',
  esiId: 'esiId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  tokenExpiresAt: 'tokenExpiresAt',
  allianceId: 'allianceId',
  ancestryId: 'ancestryId',
  birthday: 'birthday',
  bloodlineId: 'bloodlineId',
  corporationId: 'corporationId',
  description: 'description',
  factionId: 'factionId',
  gender: 'gender',
  name: 'name',
  raceId: 'raceId',
  scopes: 'scopes',
  securityStatus: 'securityStatus',
  title: 'title',
  totalSp: 'totalSp',
  ownerId: 'ownerId'
});

exports.Prisma.ChrAncestriesScalarFieldEnum = makeEnum({
  ancestryID: 'ancestryID',
  ancestryName: 'ancestryName',
  bloodlineID: 'bloodlineID',
  description: 'description',
  perception: 'perception',
  willpower: 'willpower',
  charisma: 'charisma',
  memory: 'memory',
  intelligence: 'intelligence',
  iconID: 'iconID',
  shortDescription: 'shortDescription'
});

exports.Prisma.ChrAttributesScalarFieldEnum = makeEnum({
  attributeID: 'attributeID',
  attributeName: 'attributeName',
  description: 'description',
  iconID: 'iconID',
  shortDescription: 'shortDescription',
  notes: 'notes'
});

exports.Prisma.ChrBloodlinesScalarFieldEnum = makeEnum({
  bloodlineID: 'bloodlineID',
  bloodlineName: 'bloodlineName',
  raceID: 'raceID',
  description: 'description',
  maleDescription: 'maleDescription',
  femaleDescription: 'femaleDescription',
  shipTypeID: 'shipTypeID',
  corporationID: 'corporationID',
  perception: 'perception',
  willpower: 'willpower',
  charisma: 'charisma',
  memory: 'memory',
  intelligence: 'intelligence',
  iconID: 'iconID',
  shortDescription: 'shortDescription',
  shortMaleDescription: 'shortMaleDescription',
  shortFemaleDescription: 'shortFemaleDescription'
});

exports.Prisma.ChrFactionsScalarFieldEnum = makeEnum({
  factionID: 'factionID',
  factionName: 'factionName',
  description: 'description',
  raceIDs: 'raceIDs',
  solarSystemID: 'solarSystemID',
  corporationID: 'corporationID',
  sizeFactor: 'sizeFactor',
  stationCount: 'stationCount',
  stationSystemCount: 'stationSystemCount',
  militiaCorporationID: 'militiaCorporationID',
  iconID: 'iconID'
});

exports.Prisma.ChrRacesScalarFieldEnum = makeEnum({
  raceID: 'raceID',
  raceName: 'raceName',
  description: 'description',
  iconID: 'iconID',
  shortDescription: 'shortDescription'
});

exports.Prisma.CorporationScalarFieldEnum = makeEnum({
  id: 'id',
  allianceId: 'allianceId',
  ceoId: 'ceoId',
  creatorId: 'creatorId',
  dateFounded: 'dateFounded',
  description: 'description',
  factionId: 'factionId',
  homeStationId: 'homeStationId',
  memberCount: 'memberCount',
  name: 'name',
  shares: 'shares',
  taxRate: 'taxRate',
  ticker: 'ticker',
  url: 'url',
  warEligible: 'warEligible'
});

exports.Prisma.CrpActivitiesScalarFieldEnum = makeEnum({
  activityID: 'activityID',
  activityName: 'activityName',
  description: 'description'
});

exports.Prisma.CrpNPCCorporationDivisionsScalarFieldEnum = makeEnum({
  corporationID: 'corporationID',
  divisionID: 'divisionID',
  size: 'size'
});

exports.Prisma.CrpNPCCorporationResearchFieldsScalarFieldEnum = makeEnum({
  skillID: 'skillID',
  corporationID: 'corporationID'
});

exports.Prisma.CrpNPCCorporationTradesScalarFieldEnum = makeEnum({
  corporationID: 'corporationID',
  typeID: 'typeID'
});

exports.Prisma.CrpNPCCorporationsScalarFieldEnum = makeEnum({
  corporationID: 'corporationID',
  size: 'size',
  extent: 'extent',
  solarSystemID: 'solarSystemID',
  investorID1: 'investorID1',
  investorShares1: 'investorShares1',
  investorID2: 'investorID2',
  investorShares2: 'investorShares2',
  investorID3: 'investorID3',
  investorShares3: 'investorShares3',
  investorID4: 'investorID4',
  investorShares4: 'investorShares4',
  friendID: 'friendID',
  enemyID: 'enemyID',
  publicShares: 'publicShares',
  initialPrice: 'initialPrice',
  minSecurity: 'minSecurity',
  scattered: 'scattered',
  fringe: 'fringe',
  corridor: 'corridor',
  hub: 'hub',
  border: 'border',
  factionID: 'factionID',
  sizeFactor: 'sizeFactor',
  stationCount: 'stationCount',
  stationSystemCount: 'stationSystemCount',
  description: 'description',
  iconID: 'iconID'
});

exports.Prisma.CrpNPCDivisionsScalarFieldEnum = makeEnum({
  divisionID: 'divisionID',
  divisionName: 'divisionName',
  description: 'description',
  leaderType: 'leaderType'
});

exports.Prisma.DgmAttributeCategoriesScalarFieldEnum = makeEnum({
  categoryID: 'categoryID',
  categoryName: 'categoryName',
  categoryDescription: 'categoryDescription'
});

exports.Prisma.DgmAttributeTypesScalarFieldEnum = makeEnum({
  attributeID: 'attributeID',
  attributeName: 'attributeName',
  description: 'description',
  iconID: 'iconID',
  defaultValue: 'defaultValue',
  published: 'published',
  displayName: 'displayName',
  unitID: 'unitID',
  stackable: 'stackable',
  highIsGood: 'highIsGood',
  categoryID: 'categoryID'
});

exports.Prisma.DgmEffectsScalarFieldEnum = makeEnum({
  effectID: 'effectID',
  effectName: 'effectName',
  effectCategory: 'effectCategory',
  preExpression: 'preExpression',
  postExpression: 'postExpression',
  description: 'description',
  guid: 'guid',
  iconID: 'iconID',
  isOffensive: 'isOffensive',
  isAssistance: 'isAssistance',
  durationAttributeID: 'durationAttributeID',
  trackingSpeedAttributeID: 'trackingSpeedAttributeID',
  dischargeAttributeID: 'dischargeAttributeID',
  rangeAttributeID: 'rangeAttributeID',
  falloffAttributeID: 'falloffAttributeID',
  disallowAutoRepeat: 'disallowAutoRepeat',
  published: 'published',
  displayName: 'displayName',
  isWarpSafe: 'isWarpSafe',
  rangeChance: 'rangeChance',
  electronicChance: 'electronicChance',
  propulsionChance: 'propulsionChance',
  distribution: 'distribution',
  sfxName: 'sfxName',
  npcUsageChanceAttributeID: 'npcUsageChanceAttributeID',
  npcActivationChanceAttributeID: 'npcActivationChanceAttributeID',
  fittingUsageChanceAttributeID: 'fittingUsageChanceAttributeID',
  modifierInfo: 'modifierInfo'
});

exports.Prisma.DgmExpressionsScalarFieldEnum = makeEnum({
  expressionID: 'expressionID',
  operandID: 'operandID',
  arg1: 'arg1',
  arg2: 'arg2',
  expressionValue: 'expressionValue',
  description: 'description',
  expressionName: 'expressionName',
  expressionTypeID: 'expressionTypeID',
  expressionGroupID: 'expressionGroupID',
  expressionAttributeID: 'expressionAttributeID'
});

exports.Prisma.DgmTypeAttributesScalarFieldEnum = makeEnum({
  typeID: 'typeID',
  attributeID: 'attributeID',
  valueInt: 'valueInt',
  valueFloat: 'valueFloat'
});

exports.Prisma.DgmTypeEffectsScalarFieldEnum = makeEnum({
  typeID: 'typeID',
  effectID: 'effectID',
  isDefault: 'isDefault'
});

exports.Prisma.EveGraphicsScalarFieldEnum = makeEnum({
  graphicID: 'graphicID',
  sofFactionName: 'sofFactionName',
  graphicFile: 'graphicFile',
  sofHullName: 'sofHullName',
  sofRaceName: 'sofRaceName',
  description: 'description'
});

exports.Prisma.EveIconsScalarFieldEnum = makeEnum({
  iconID: 'iconID',
  iconFile: 'iconFile',
  description: 'description'
});

exports.Prisma.EveUnitsScalarFieldEnum = makeEnum({
  unitID: 'unitID',
  unitName: 'unitName',
  displayName: 'displayName',
  description: 'description'
});

exports.Prisma.IndustryActivityScalarFieldEnum = makeEnum({
  typeID: 'typeID',
  activityID: 'activityID',
  time: 'time'
});

exports.Prisma.IndustryBlueprintsScalarFieldEnum = makeEnum({
  typeID: 'typeID',
  maxProductionLimit: 'maxProductionLimit'
});

exports.Prisma.InvCategoriesScalarFieldEnum = makeEnum({
  categoryID: 'categoryID',
  categoryName: 'categoryName',
  iconID: 'iconID',
  published: 'published'
});

exports.Prisma.InvContrabandTypesScalarFieldEnum = makeEnum({
  factionID: 'factionID',
  typeID: 'typeID',
  standingLoss: 'standingLoss',
  confiscateMinSec: 'confiscateMinSec',
  fineByValue: 'fineByValue',
  attackMinSec: 'attackMinSec'
});

exports.Prisma.InvControlTowerResourcePurposesScalarFieldEnum = makeEnum({
  purpose: 'purpose',
  purposeText: 'purposeText'
});

exports.Prisma.InvControlTowerResourcesScalarFieldEnum = makeEnum({
  controlTowerTypeID: 'controlTowerTypeID',
  resourceTypeID: 'resourceTypeID',
  purpose: 'purpose',
  quantity: 'quantity',
  minSecurityLevel: 'minSecurityLevel',
  factionID: 'factionID'
});

exports.Prisma.InvFlagsScalarFieldEnum = makeEnum({
  flagID: 'flagID',
  flagName: 'flagName',
  flagText: 'flagText',
  orderID: 'orderID'
});

exports.Prisma.InvGroupsScalarFieldEnum = makeEnum({
  groupID: 'groupID',
  categoryID: 'categoryID',
  groupName: 'groupName',
  iconID: 'iconID',
  useBasePrice: 'useBasePrice',
  anchored: 'anchored',
  anchorable: 'anchorable',
  fittableNonSingleton: 'fittableNonSingleton',
  published: 'published'
});

exports.Prisma.InvItemsScalarFieldEnum = makeEnum({
  itemID: 'itemID',
  typeID: 'typeID',
  ownerID: 'ownerID',
  locationID: 'locationID',
  flagID: 'flagID',
  quantity: 'quantity'
});

exports.Prisma.InvMarketGroupsScalarFieldEnum = makeEnum({
  marketGroupID: 'marketGroupID',
  parentGroupID: 'parentGroupID',
  marketGroupName: 'marketGroupName',
  description: 'description',
  iconID: 'iconID',
  hasTypes: 'hasTypes'
});

exports.Prisma.InvMetaGroupsScalarFieldEnum = makeEnum({
  metaGroupID: 'metaGroupID',
  metaGroupName: 'metaGroupName',
  description: 'description',
  iconID: 'iconID'
});

exports.Prisma.InvMetaTypesScalarFieldEnum = makeEnum({
  typeID: 'typeID',
  parentTypeID: 'parentTypeID',
  metaGroupID: 'metaGroupID'
});

exports.Prisma.InvNamesScalarFieldEnum = makeEnum({
  itemID: 'itemID',
  itemName: 'itemName'
});

exports.Prisma.InvPositionsScalarFieldEnum = makeEnum({
  itemID: 'itemID',
  x: 'x',
  y: 'y',
  z: 'z',
  yaw: 'yaw',
  pitch: 'pitch',
  roll: 'roll'
});

exports.Prisma.InvTraitsScalarFieldEnum = makeEnum({
  traitID: 'traitID',
  typeID: 'typeID',
  skillID: 'skillID',
  bonus: 'bonus',
  bonusText: 'bonusText',
  unitID: 'unitID'
});

exports.Prisma.InvTypeMaterialsScalarFieldEnum = makeEnum({
  typeID: 'typeID',
  materialTypeID: 'materialTypeID',
  quantity: 'quantity'
});

exports.Prisma.InvTypeReactionsScalarFieldEnum = makeEnum({
  reactionTypeID: 'reactionTypeID',
  input: 'input',
  typeID: 'typeID',
  quantity: 'quantity'
});

exports.Prisma.InvTypesScalarFieldEnum = makeEnum({
  typeID: 'typeID',
  groupID: 'groupID',
  typeName: 'typeName',
  description: 'description',
  mass: 'mass',
  volume: 'volume',
  capacity: 'capacity',
  portionSize: 'portionSize',
  raceID: 'raceID',
  basePrice: 'basePrice',
  published: 'published',
  marketGroupID: 'marketGroupID',
  iconID: 'iconID',
  soundID: 'soundID',
  graphicID: 'graphicID'
});

exports.Prisma.InvUniqueNamesScalarFieldEnum = makeEnum({
  itemID: 'itemID',
  itemName: 'itemName',
  groupID: 'groupID'
});

exports.Prisma.InvVolumesScalarFieldEnum = makeEnum({
  typeID: 'typeID',
  volume: 'volume'
});

exports.Prisma.MapCelestialGraphicsScalarFieldEnum = makeEnum({
  celestialID: 'celestialID',
  heightMap1: 'heightMap1',
  heightMap2: 'heightMap2',
  shaderPreset: 'shaderPreset',
  population: 'population'
});

exports.Prisma.MapCelestialStatisticsScalarFieldEnum = makeEnum({
  celestialID: 'celestialID',
  temperature: 'temperature',
  spectralClass: 'spectralClass',
  luminosity: 'luminosity',
  age: 'age',
  life: 'life',
  orbitRadius: 'orbitRadius',
  eccentricity: 'eccentricity',
  massDust: 'massDust',
  massGas: 'massGas',
  fragmented: 'fragmented',
  density: 'density',
  surfaceGravity: 'surfaceGravity',
  escapeVelocity: 'escapeVelocity',
  orbitPeriod: 'orbitPeriod',
  rotationRate: 'rotationRate',
  locked: 'locked',
  pressure: 'pressure',
  radius: 'radius',
  mass: 'mass'
});

exports.Prisma.MapConstellationJumpsScalarFieldEnum = makeEnum({
  fromRegionID: 'fromRegionID',
  fromConstellationID: 'fromConstellationID',
  toConstellationID: 'toConstellationID',
  toRegionID: 'toRegionID'
});

exports.Prisma.MapConstellationsScalarFieldEnum = makeEnum({
  regionID: 'regionID',
  constellationID: 'constellationID',
  constellationName: 'constellationName',
  x: 'x',
  y: 'y',
  z: 'z',
  xMin: 'xMin',
  xMax: 'xMax',
  yMin: 'yMin',
  yMax: 'yMax',
  zMin: 'zMin',
  zMax: 'zMax',
  factionID: 'factionID',
  radius: 'radius'
});

exports.Prisma.MapDenormalizeScalarFieldEnum = makeEnum({
  itemID: 'itemID',
  typeID: 'typeID',
  groupID: 'groupID',
  solarSystemID: 'solarSystemID',
  constellationID: 'constellationID',
  regionID: 'regionID',
  orbitID: 'orbitID',
  x: 'x',
  y: 'y',
  z: 'z',
  radius: 'radius',
  itemName: 'itemName',
  security: 'security',
  celestialIndex: 'celestialIndex',
  orbitIndex: 'orbitIndex'
});

exports.Prisma.MapJumpsScalarFieldEnum = makeEnum({
  stargateID: 'stargateID',
  destinationID: 'destinationID'
});

exports.Prisma.MapLandmarksScalarFieldEnum = makeEnum({
  landmarkID: 'landmarkID',
  landmarkName: 'landmarkName',
  description: 'description',
  locationID: 'locationID',
  x: 'x',
  y: 'y',
  z: 'z',
  iconID: 'iconID'
});

exports.Prisma.MapLocationScenesScalarFieldEnum = makeEnum({
  locationID: 'locationID',
  graphicID: 'graphicID'
});

exports.Prisma.MapLocationWormholeClassesScalarFieldEnum = makeEnum({
  locationID: 'locationID',
  wormholeClassID: 'wormholeClassID'
});

exports.Prisma.MapRegionJumpsScalarFieldEnum = makeEnum({
  fromRegionID: 'fromRegionID',
  toRegionID: 'toRegionID'
});

exports.Prisma.MapRegionsScalarFieldEnum = makeEnum({
  regionID: 'regionID',
  regionName: 'regionName',
  x: 'x',
  y: 'y',
  z: 'z',
  xMin: 'xMin',
  xMax: 'xMax',
  yMin: 'yMin',
  yMax: 'yMax',
  zMin: 'zMin',
  zMax: 'zMax',
  factionID: 'factionID',
  nebula: 'nebula',
  radius: 'radius'
});

exports.Prisma.MapSolarSystemJumpsScalarFieldEnum = makeEnum({
  fromRegionID: 'fromRegionID',
  fromConstellationID: 'fromConstellationID',
  fromSolarSystemID: 'fromSolarSystemID',
  toSolarSystemID: 'toSolarSystemID',
  toConstellationID: 'toConstellationID',
  toRegionID: 'toRegionID'
});

exports.Prisma.MapSolarSystemsScalarFieldEnum = makeEnum({
  regionID: 'regionID',
  constellationID: 'constellationID',
  solarSystemID: 'solarSystemID',
  solarSystemName: 'solarSystemName',
  x: 'x',
  y: 'y',
  z: 'z',
  xMin: 'xMin',
  xMax: 'xMax',
  yMin: 'yMin',
  yMax: 'yMax',
  zMin: 'zMin',
  zMax: 'zMax',
  luminosity: 'luminosity',
  border: 'border',
  fringe: 'fringe',
  corridor: 'corridor',
  hub: 'hub',
  international: 'international',
  regional: 'regional',
  constellation: 'constellation',
  security: 'security',
  factionID: 'factionID',
  radius: 'radius',
  sunTypeID: 'sunTypeID',
  securityClass: 'securityClass'
});

exports.Prisma.MapUniverseScalarFieldEnum = makeEnum({
  universeID: 'universeID',
  universeName: 'universeName',
  x: 'x',
  y: 'y',
  z: 'z',
  xMin: 'xMin',
  xMax: 'xMax',
  yMin: 'yMin',
  yMax: 'yMax',
  zMin: 'zMin',
  zMax: 'zMax',
  radius: 'radius'
});

exports.Prisma.PlanetSchematicsPinMapScalarFieldEnum = makeEnum({
  schematicID: 'schematicID',
  pinTypeID: 'pinTypeID'
});

exports.Prisma.PlanetSchematicsScalarFieldEnum = makeEnum({
  schematicID: 'schematicID',
  schematicName: 'schematicName',
  cycleTime: 'cycleTime'
});

exports.Prisma.PlanetSchematicsTypeMapScalarFieldEnum = makeEnum({
  schematicID: 'schematicID',
  typeID: 'typeID',
  quantity: 'quantity',
  isInput: 'isInput'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RamActivitiesScalarFieldEnum = makeEnum({
  activityID: 'activityID',
  activityName: 'activityName',
  iconNo: 'iconNo',
  description: 'description',
  published: 'published'
});

exports.Prisma.RamAssemblyLineStationsScalarFieldEnum = makeEnum({
  stationID: 'stationID',
  assemblyLineTypeID: 'assemblyLineTypeID',
  quantity: 'quantity',
  stationTypeID: 'stationTypeID',
  ownerID: 'ownerID',
  solarSystemID: 'solarSystemID',
  regionID: 'regionID'
});

exports.Prisma.RamAssemblyLineTypeDetailPerCategoryScalarFieldEnum = makeEnum({
  assemblyLineTypeID: 'assemblyLineTypeID',
  categoryID: 'categoryID',
  timeMultiplier: 'timeMultiplier',
  materialMultiplier: 'materialMultiplier',
  costMultiplier: 'costMultiplier'
});

exports.Prisma.RamAssemblyLineTypeDetailPerGroupScalarFieldEnum = makeEnum({
  assemblyLineTypeID: 'assemblyLineTypeID',
  groupID: 'groupID',
  timeMultiplier: 'timeMultiplier',
  materialMultiplier: 'materialMultiplier',
  costMultiplier: 'costMultiplier'
});

exports.Prisma.RamAssemblyLineTypesScalarFieldEnum = makeEnum({
  assemblyLineTypeID: 'assemblyLineTypeID',
  assemblyLineTypeName: 'assemblyLineTypeName',
  description: 'description',
  baseTimeMultiplier: 'baseTimeMultiplier',
  baseMaterialMultiplier: 'baseMaterialMultiplier',
  baseCostMultiplier: 'baseCostMultiplier',
  volume: 'volume',
  activityID: 'activityID',
  minCostPerHour: 'minCostPerHour'
});

exports.Prisma.RamInstallationTypeContentsScalarFieldEnum = makeEnum({
  installationTypeID: 'installationTypeID',
  assemblyLineTypeID: 'assemblyLineTypeID',
  quantity: 'quantity'
});

exports.Prisma.SkinLicenseScalarFieldEnum = makeEnum({
  licenseTypeID: 'licenseTypeID',
  duration: 'duration',
  skinID: 'skinID'
});

exports.Prisma.SkinMaterialsScalarFieldEnum = makeEnum({
  skinMaterialID: 'skinMaterialID',
  displayNameID: 'displayNameID',
  materialSetID: 'materialSetID'
});

exports.Prisma.SkinsScalarFieldEnum = makeEnum({
  skinID: 'skinID',
  internalName: 'internalName',
  skinMaterialID: 'skinMaterialID'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StaOperationServicesScalarFieldEnum = makeEnum({
  operationID: 'operationID',
  serviceID: 'serviceID'
});

exports.Prisma.StaOperationsScalarFieldEnum = makeEnum({
  activityID: 'activityID',
  operationID: 'operationID',
  operationName: 'operationName',
  description: 'description',
  fringe: 'fringe',
  corridor: 'corridor',
  hub: 'hub',
  border: 'border',
  ratio: 'ratio',
  caldariStationTypeID: 'caldariStationTypeID',
  minmatarStationTypeID: 'minmatarStationTypeID',
  amarrStationTypeID: 'amarrStationTypeID',
  gallenteStationTypeID: 'gallenteStationTypeID',
  joveStationTypeID: 'joveStationTypeID'
});

exports.Prisma.StaServicesScalarFieldEnum = makeEnum({
  serviceID: 'serviceID',
  serviceName: 'serviceName',
  description: 'description'
});

exports.Prisma.StaStationTypesScalarFieldEnum = makeEnum({
  stationTypeID: 'stationTypeID',
  dockEntryX: 'dockEntryX',
  dockEntryY: 'dockEntryY',
  dockEntryZ: 'dockEntryZ',
  dockOrientationX: 'dockOrientationX',
  dockOrientationY: 'dockOrientationY',
  dockOrientationZ: 'dockOrientationZ',
  operationID: 'operationID',
  officeSlots: 'officeSlots',
  reprocessingEfficiency: 'reprocessingEfficiency',
  conquerable: 'conquerable'
});

exports.Prisma.StaStationsScalarFieldEnum = makeEnum({
  stationID: 'stationID',
  security: 'security',
  dockingCostPerVolume: 'dockingCostPerVolume',
  maxShipVolumeDockable: 'maxShipVolumeDockable',
  officeRentalCost: 'officeRentalCost',
  operationID: 'operationID',
  stationTypeID: 'stationTypeID',
  corporationID: 'corporationID',
  solarSystemID: 'solarSystemID',
  constellationID: 'constellationID',
  regionID: 'regionID',
  stationName: 'stationName',
  x: 'x',
  y: 'y',
  z: 'z',
  reprocessingEfficiency: 'reprocessingEfficiency',
  reprocessingStationsTake: 'reprocessingStationsTake',
  reprocessingHangarFlag: 'reprocessingHangarFlag'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TranslationTablesScalarFieldEnum = makeEnum({
  sourceTable: 'sourceTable',
  destinationTable: 'destinationTable',
  translatedKey: 'translatedKey',
  tcGroupID: 'tcGroupID',
  tcID: 'tcID'
});

exports.Prisma.TrnTranslationColumnsScalarFieldEnum = makeEnum({
  tcGroupID: 'tcGroupID',
  tcID: 'tcID',
  tableName: 'tableName',
  columnName: 'columnName',
  masterID: 'masterID'
});

exports.Prisma.TrnTranslationLanguagesScalarFieldEnum = makeEnum({
  numericLanguageID: 'numericLanguageID',
  languageID: 'languageID',
  languageName: 'languageName'
});

exports.Prisma.TrnTranslationsScalarFieldEnum = makeEnum({
  tcID: 'tcID',
  keyID: 'keyID',
  languageID: 'languageID',
  text: 'text'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  email: 'email',
  status: 'status'
});

exports.Prisma.WarCombatZoneSystemsScalarFieldEnum = makeEnum({
  solarSystemID: 'solarSystemID',
  combatZoneID: 'combatZoneID'
});

exports.Prisma.WarCombatZonesScalarFieldEnum = makeEnum({
  combatZoneID: 'combatZoneID',
  combatZoneName: 'combatZoneName',
  factionID: 'factionID',
  centerSystemID: 'centerSystemID',
  description: 'description'
});
exports.UserStatus = makeEnum({
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Character: 'Character',
  Alliance: 'Alliance',
  Corporation: 'Corporation',
  agtAgentTypes: 'agtAgentTypes',
  agtAgents: 'agtAgents',
  agtAgentsInSpace: 'agtAgentsInSpace',
  agtResearchAgents: 'agtResearchAgents',
  certCerts: 'certCerts',
  chrAncestries: 'chrAncestries',
  chrAttributes: 'chrAttributes',
  chrBloodlines: 'chrBloodlines',
  chrFactions: 'chrFactions',
  chrRaces: 'chrRaces',
  crpActivities: 'crpActivities',
  crpNPCCorporationDivisions: 'crpNPCCorporationDivisions',
  crpNPCCorporationResearchFields: 'crpNPCCorporationResearchFields',
  crpNPCCorporationTrades: 'crpNPCCorporationTrades',
  crpNPCCorporations: 'crpNPCCorporations',
  crpNPCDivisions: 'crpNPCDivisions',
  dgmAttributeCategories: 'dgmAttributeCategories',
  dgmAttributeTypes: 'dgmAttributeTypes',
  dgmEffects: 'dgmEffects',
  dgmExpressions: 'dgmExpressions',
  dgmTypeAttributes: 'dgmTypeAttributes',
  dgmTypeEffects: 'dgmTypeEffects',
  eveGraphics: 'eveGraphics',
  eveIcons: 'eveIcons',
  eveUnits: 'eveUnits',
  industryActivity: 'industryActivity',
  industryBlueprints: 'industryBlueprints',
  invCategories: 'invCategories',
  invContrabandTypes: 'invContrabandTypes',
  invControlTowerResourcePurposes: 'invControlTowerResourcePurposes',
  invControlTowerResources: 'invControlTowerResources',
  invFlags: 'invFlags',
  invGroups: 'invGroups',
  invItems: 'invItems',
  invMarketGroups: 'invMarketGroups',
  invMetaGroups: 'invMetaGroups',
  invMetaTypes: 'invMetaTypes',
  invNames: 'invNames',
  invPositions: 'invPositions',
  invTraits: 'invTraits',
  invTypeMaterials: 'invTypeMaterials',
  invTypeReactions: 'invTypeReactions',
  invTypes: 'invTypes',
  invUniqueNames: 'invUniqueNames',
  invVolumes: 'invVolumes',
  mapCelestialGraphics: 'mapCelestialGraphics',
  mapCelestialStatistics: 'mapCelestialStatistics',
  mapConstellationJumps: 'mapConstellationJumps',
  mapConstellations: 'mapConstellations',
  mapDenormalize: 'mapDenormalize',
  mapJumps: 'mapJumps',
  mapLandmarks: 'mapLandmarks',
  mapLocationScenes: 'mapLocationScenes',
  mapLocationWormholeClasses: 'mapLocationWormholeClasses',
  mapRegionJumps: 'mapRegionJumps',
  mapRegions: 'mapRegions',
  mapSolarSystemJumps: 'mapSolarSystemJumps',
  mapSolarSystems: 'mapSolarSystems',
  mapUniverse: 'mapUniverse',
  planetSchematics: 'planetSchematics',
  planetSchematicsPinMap: 'planetSchematicsPinMap',
  planetSchematicsTypeMap: 'planetSchematicsTypeMap',
  ramActivities: 'ramActivities',
  ramAssemblyLineStations: 'ramAssemblyLineStations',
  ramAssemblyLineTypeDetailPerCategory: 'ramAssemblyLineTypeDetailPerCategory',
  ramAssemblyLineTypeDetailPerGroup: 'ramAssemblyLineTypeDetailPerGroup',
  ramAssemblyLineTypes: 'ramAssemblyLineTypes',
  ramInstallationTypeContents: 'ramInstallationTypeContents',
  skinLicense: 'skinLicense',
  skinMaterials: 'skinMaterials',
  skins: 'skins',
  staOperationServices: 'staOperationServices',
  staOperations: 'staOperations',
  staServices: 'staServices',
  staStationTypes: 'staStationTypes',
  staStations: 'staStations',
  translationTables: 'translationTables',
  trnTranslationColumns: 'trnTranslationColumns',
  trnTranslationLanguages: 'trnTranslationLanguages',
  trnTranslations: 'trnTranslations',
  warCombatZoneSystems: 'warCombatZoneSystems',
  warCombatZones: 'warCombatZones'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
