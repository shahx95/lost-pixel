type FullConfig = {
  lostPixelUrl: string;
  lostPixelProjectId: string;
  ciBuildId: string;
  ciBuildNumber: string;
  repository: string;
  commitRef: string;
  commitRefName: string;
  commitHash: string;
  storybookPath: string;
  s3EndPoint: string;
  s3EndPointPort: number;
  s3EndPointSsl: boolean;
  s3Region: string;
  s3AccessKey: string;
  s3SecretKey: string;
  s3SessionToken: string;
  s3BucketName: string;
  s3BaseUrl: string;
  imagePathBaseline: string;
  imagePathCurrent: string;
  imagePathDifference: string;
};
