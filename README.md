***

# Supply-Verse Bharat

Supply-Verse Bharat is a blockchain-enabled supply chain platform optimized for Indian enterprises. It integrates modern tracking, transparency, and secure operations through smart contracts, automating key supply chain tasks.

***

### Features Overview

- **Decentralized Asset Tracking:** Track goods from origin to delivery, reducing tampering or fraud, and enabling public or role-based asset visibility.[1]
- **Smart Contract Automation:** Automate logistics, payment, and compliance processes with customizable blockchain contracts for Indian supply chain workflows.[1]
- **Secure User Registration & Authentication:** Blockchain-based user onboarding, AES-encrypted data, and secure role assignment for manufacturers, suppliers, and retailers.[1]
- **Multi-Role Management:** Supports manufacturers, distributors, warehouses, retailers, regulators, and customers with unique privileges and dashboards.[1]
- **Real-Time Status Monitoring:** View live order, logistics, or asset status, with notifications and audit history for each supply chain event.[1]
- **Compliance & Documentation:** Store, verify, and automate regulatory compliance steps and documentation for each transaction or shipment.[1]
- **Tamper-Proof History:** Every transaction or state change is logged, transparent, and immutable for audits and dispute resolution.[1]
- **Modular API Integration:** Connect with web platforms, apps, and enterprise systems via open APIs for custom needs.[1]

**** 

### Installation Guide

##### Prerequisites

- Node.js (>= v14)
- npm or yarn
- Docker (for blockchain network setup)
- Git
- Hyperledger Composer CLI (for blockchain operations)[1]

##### Step 1: Clone the Repository

```bash
git clone https://github.com/piyush-pine/supply-verse-bharat.git
cd supply-verse-bharat
```

##### Step 2: Install Dependencies

```bash
# Use npm or yarn
npm install
# or
yarn install
```

##### Step 3: Start Composer Playground (Optional for Testing)

```bash
docker pull hyperledger/composer-playground
docker run -d -p 8080:8080 hyperledger/composer-playground
# Visit http://localhost:8080 to interact with Hyperledger Composer
```

##### Step 4: Deploy Blockchain Network

1. Generate business network archives (BNA) using Composer CLI.
2. Install and start the business network on your local or cloud-based Hyperledger Fabric.

```bash
# Example (assuming your .bna file is ready):
composer network install -c PeerAdmin@hlfv1 -a supplyversebharat.bna
composer network start -c PeerAdmin@hlfv1 -n supplyversebharat -V 0.0.1 -A admin -S adminpw
composer card import -f admin@SupplyVerseBharat.card
```

##### Step 5: Set Environment Variables

- Create a `.env` file using template `.env.example`.
- Set blockchain credentials, REST API endpoint, UI settings, and database (if used).

##### Step 6: Run Development Server

```bash
npm run dev
# or for production
npm run build && npm start
```

##### Step 7: Access the Platform

- Launch front-end at `http://localhost:3000` or your configured port.
- Login/register using blockchain credentials to access your dashboard and features.

***

### Quick Start (TLDR)

1. `git clone ... && cd supply-verse-bharat`
2. `npm install`
3. Deploy Hyperledger Composer business network (see above for steps)
4. `npm run dev`
5. Open browser, use the system as admin, manufacturer, distributor, etc.

***

### Resources

- Full architecture diagrams and smart contract code: see `/docs` and `/network` directories in repo.
- For advanced integration, API documentation is under `/api-docs`.
- Troubleshooting tips and FAQ in `/docs/TROUBLESHOOT.md`.[1]

***

