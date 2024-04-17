/**
 * AWS Regions.
 */
export enum CkRegion {
  US_EAST_1 = 'us-east-1',
  US_EAST_2 = 'us-east-2',
  US_WEST_1 = 'us-west-1',
  US_WEST_2 = 'us-west-2',
  AF_SOUTH_1 = 'af-south-1',
  AP_EAST_1 = 'ap-east-1',
  AP_SOUTH_1 = 'ap-south-1',
  AP_SOUTH_2 = 'ap-south-2',
  AP_SOUTHEAST_1 = 'ap-southeast-1',
  AP_SOUTHEAST_2 = 'ap-southeast-2',
  AP_SOUTHEAST_3 = 'ap-southeast-3',
  AP_SOUTHEAST_4 = 'ap-southeast-4',
  AP_NORTHEAST_1 = 'ap-northeast-1',
  AP_NORTHEAST_2 = 'ap-northeast-2',
  AP_NORTHEAST_3 = 'ap-northeast-3',
  CA_CENTRAL_1 = 'ca-central-1',
  EU_SOUTH_1 = 'eu-south-1',
  EU_WEST_1 = 'eu-west-1',
  EU_WEST_2 = 'eu-west-2',
  EU_WEST_3 = 'eu-west-3',
  EU_SOUTH_2 = 'eu-south-2',
  EU_NORTH_1 = 'eu-north-1',
  EU_CENTRAL_1 = 'eu-central-1',
  EU_CENTRAL_2 = 'eu-central-2',
  ME_SOUTH_1 = 'me-south-1',
  ME_CENTRAL = 'me-central-1',
  SA_EAST_1 = 'sa-east-1',
}

export class CkRegionUtil {
  public static usRegions(): CkRegion[] {
    return [
      CkRegion.US_EAST_1,
      CkRegion.US_EAST_2,
      CkRegion.US_WEST_1,
      CkRegion.US_WEST_2,
    ];
  }

  public static caRegions(): CkRegion[] {
    return [CkRegion.CA_CENTRAL_1];
  }

  public static euRegions(): CkRegion[] {
    return [
      CkRegion.EU_CENTRAL_1,
      CkRegion.EU_CENTRAL_2,
      CkRegion.EU_NORTH_1,
      CkRegion.EU_WEST_1,
      CkRegion.EU_WEST_2,
      CkRegion.EU_WEST_3,
      CkRegion.EU_SOUTH_1,
      CkRegion.EU_SOUTH_2,
    ];
  }

  public static apRegions(): CkRegion[] {
    return [
      CkRegion.AP_NORTHEAST_1,
      CkRegion.AP_NORTHEAST_2,
      CkRegion.AP_NORTHEAST_3,
      CkRegion.AP_SOUTH_1,
      CkRegion.AP_SOUTHEAST_1,
      CkRegion.AP_SOUTHEAST_2,
      CkRegion.AP_SOUTHEAST_3,
      CkRegion.AP_SOUTHEAST_4,
    ];
  }

  public static allRegions(): CkRegion[] {
    return [
      ...CkRegionUtil.usRegions(),
      ...CkRegionUtil.euRegions(),
      ...CkRegionUtil.caRegions(),
      ...CkRegionUtil.apRegions(),
    ];
  }
}
