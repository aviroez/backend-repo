# Back End Technical Test from EBUDDY PTE. LTD.

## Initial setup
Make sure to setup [buddy-turborepo](https://github.com/aviroez/buddy-turborepo)

Clone from our repository
```bash
git clone https://github.com/aviroez/backend-repo
git checkout main
```

Second, make sure `NodeJs` is installed and run 
```bash
npm install
```

## Firebase Setup
Make sure to add service_account.json on your root directory

Then, run the firebase cli
```bash
firebase init
npm run copy-service-account
```

## Running Apps

Run the development server:

```bash
npm run dev
```

Open [http://127.0.0.1:5001/[project-id]/us-central1/api](http://127.0.0.1:5001/[project-id]/us-central1/api) with your browser/postman to see the result.



Run the production server:

```bash
npm run start
```