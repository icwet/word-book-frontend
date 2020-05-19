export interface PingResult {
  general: {
    debug: boolean;
    password: string;
    user: string;
  };
  server: {
    host: string;
    port: number;
  };
}
