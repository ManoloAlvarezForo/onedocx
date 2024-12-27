import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

// Generate a new keypair
const keypair = Keypair.generate();
const privateKeyBase58 = bs58.encode(keypair.secretKey);

console.log(`The public key is: ${keypair.publicKey.toBase58()}`);
console.log(`The secret key is: ${keypair.secretKey}`);
console.log(`The private key is: ${privateKeyBase58}`);

// Example private key in Base58 (replace with your real private key if needed)
const privateKey = '<your_private_key>';

// Clean spaces and decode the private key
const privateKeyBase58Cleaned = privateKey.replace(/\s+/g, ""); // Removes any spaces or line breaks
try {
  const decodedPrivateKey = bs58.decode(privateKeyBase58Cleaned);

  // Convert Uint8Array to a space-free string for cleaner logging
  const decodedPrivateKeyString = Array.from(decodedPrivateKey).join(",");
  console.log("Decoded Private Key (cleaned string):/n/n", decodedPrivateKeyString);
} catch (error) {
  console.error("Failed to decode private key:", error);
}
