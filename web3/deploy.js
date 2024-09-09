require("dotenv").config();
const { execSync } = require("child_process");

const secretKey = process.env.THIRDWEB_SECRET_KEY;

if (!secretKey) {
	console.error("THIRDWEB_SECRET_KEY not found in environment variables");
	process.exit(1);
}

try {
	execSync(`npx thirdweb@latest deploy -k "${secretKey}"`, {
		stdio: "inherit",
	});
} catch (error) {
	console.error("Deployment failed:", error);
}
