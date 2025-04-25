import { execSync } from "child_process";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), `.env.development`) });

const apiUrl = process.env.VITE_API_URL;
const swaggerUrl = `${apiUrl}/swagger-ui-json`;
const outputPath = "src/types/api.d.ts";

console.log(`Fetching Swagger JSON from: ${swaggerUrl}`);
console.log(`Saving generated types to: ${outputPath}`);

execSync(`pnpm exec openapi-typescript ${swaggerUrl} -o ${outputPath}`, {
    stdio: "inherit",
});
