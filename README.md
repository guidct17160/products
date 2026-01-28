# Products Management Backend

โปรเจกต์นี้เป็นโปรเจคสำหรับจัดการสินค้า 


---
📌 Project Description
ระบบสามารถจัดการข้อมูลสินค้าได้ครบพื้นฐาน ได้แก่
- เพิ่มสินค้าใหม่
- แสดงรายการสินค้าทั้งหมด
- ดูรายละเอียดสินค้า
- แก้ไขข้อมูลสินค้า
- ลบสินค้า
- อัปโหลดรูปภาพสินค้า

โปรเจกต์นี้ใช้ EJS สำหรับแสดงผลหน้าเว็บ และใช้ MongoDB เป็นฐานข้อมูล
แต่เชื่อม MongoDB Atlas ไม่ได้เลยเชื่อมใน MongoDB Local โดยใช้ MongoDB Compass

---

🧰 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Multer (สำหรับอัปโหลดรูปภาพ)
- Method-Override
- dotenv

---

📂 Project Structure
├─ app.js
├─ package.json
├─ package-lock.json
├─ routes/
│ └─ products.js
├─ models/
│ └─ Product.js
├─ middleware/
│ └─ upload.js
├─ views/
│ └─ products/
│ ├─ index.ejs
│ ├─ new-products.ejs
│ ├─ edit-product.ejs
│ └─ show-detail.ejs
├─ uploads/ (ไม่อัปโหลดขึ้น GitHub)
├─ .env (ไม่อัปโหลดขึ้น GitHub)
├─ .gitignore
└─ README.md

----------------------------------------------------------------------------------
ขั้นตอนใช้งาน
npm init -y
----------------------------------------------------------------------------------
npm i nodemon --save-dev
----------------------------------------------------------------------------------
npm i express multer dotenv method-override moongoose
----------------------------------------------------------------------------------
<img width="607" height="124" alt="image" src="https://github.com/user-attachments/assets/17ca5d8f-9401-46f7-b10a-f13670c5b606" /><br>
set package ตรง scripts dev ให้เป็น nodemon app.js และตอนรันใช้ คำสั่ง npm run dev
----------------------------------------------------------------------------------
