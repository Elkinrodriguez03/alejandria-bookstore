import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('a1164ea2-2b42-4883-a79a-3b6a8a10a31c', '1Bennie_Lang51@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_K1b2c3d4e5f6g7h8i9j0k1', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('f6a4e8a9-ec00-44e7-9a66-33e4ff48185e', '8Florian.Mills97@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=10', 'cus_N4e5f6g7h8i9j0k1l2m3n4', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('81d109e1-2bf3-4621-b68f-ac1d3200b9ff', '15Efren_Mohr@yahoo.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=17', 'cus_J0a1b2c3d4e5f6g7h8i9j0', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('9025982c-3727-420e-a1ff-6051bd648c5d', '22Savion_Mosciski@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=24', 'cus_J0a1b2c3d4e5f6g7h8i9j0', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('19289526-fce4-459e-bfbd-17f95070120d', '29Shaylee1@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=31', 'cus_L2c3d4e5f6g7h8i9j0k1l2', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('89ce81fe-b199-4f3f-963d-ff3470b8163b', '36Arden.Cummings92@yahoo.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=38', 'cus_N4e5f6g7h8i9j0k1l2m3n4', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('c8fe735e-4c86-47eb-8734-e025e8aa228b', '43Alf.Hudson@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_K1b2c3d4e5f6g7h8i9j0k1', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('6c676d7e-78d9-4a6e-a2d1-b3f14ccf45cd', '50Freeman.Rogahn@hotmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=52', 'cus_K1b2c3d4e5f6g7h8i9j0k1', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('18dde728-4ceb-4003-be7f-69c7632a99a8', '57Ivy.Bernier@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=59', 'cus_J0a1b2c3d4e5f6g7h8i9j0', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('fe493556-bffb-4ed9-b812-aa5a454dd562', 'New Book Release', 'Your order has been successfully placed.', 'BookStore Support', '74Jacquelyn83@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=75', 'https://i.imgur.com/YfJQV5z.png?id=76', 'a1164ea2-2b42-4883-a79a-3b6a8a10a31c');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('cce6ebaf-386d-4ee5-a094-c828c374e996', 'New Book Release', 'Check out the latest book from your favorite author', 'Marketing Team', '81Devon_Gottlieb@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=82', 'https://i.imgur.com/YfJQV5z.png?id=83', '19289526-fce4-459e-bfbd-17f95070120d');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('a9ea060a-ba30-4b71-a348-a45503f77a54', 'Shipping Update', 'We would love to hear your thoughts on your recent purchase.', 'Marketing Team', '88Ellsworth.Morar@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=89', 'https://i.imgur.com/YfJQV5z.png?id=90', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('9f9281d3-fd1f-45dd-80dd-c56b3867739b', 'Review Request', 'Your order has been shipped and is on its way.', 'Marketing Team', '95Brenden.Stracke@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=96', 'https://i.imgur.com/YfJQV5z.png?id=97', 'c8fe735e-4c86-47eb-8734-e025e8aa228b');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('096cb971-a03c-41fa-8ee3-eda47f4af70c', 'New Book Release', 'Your order has been shipped and is on its way.', 'BookStore Support', '102Chelsey_Quitzon17@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=103', 'https://i.imgur.com/YfJQV5z.png?id=104', '18dde728-4ceb-4003-be7f-69c7632a99a8');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('b0aaef06-d5a9-4825-9545-4972fe3be4e3', 'Shipping Update', 'Check out the latest book from your favorite author', 'Sales Department', '109Stephon.Haag@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=110', 'https://i.imgur.com/YfJQV5z.png?id=111', '9025982c-3727-420e-a1ff-6051bd648c5d');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('457401fa-8a8e-4aaa-85b3-94fde11fe55e', 'Order Confirmation', 'Your order has been shipped and is on its way.', 'Sales Department', '116Gardner19@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=117', 'https://i.imgur.com/YfJQV5z.png?id=118', '19289526-fce4-459e-bfbd-17f95070120d');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('18438f05-28b0-402f-8bc5-502e57a83146', 'Review Request', 'Your order has been shipped and is on its way.', 'Customer Service', '123Roslyn.Renner@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=124', 'https://i.imgur.com/YfJQV5z.png?id=125', 'c8fe735e-4c86-47eb-8734-e025e8aa228b');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('9ac39d17-eec2-45ab-83c2-21268a387f1a', 'New Book Release', 'We would love to hear your thoughts on your recent purchase.', 'Marketing Team', '130Elias76@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=131', 'https://i.imgur.com/YfJQV5z.png?id=132', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7bd982a5-9c0d-4b73-9d61-c576d738ecdc', 'Shipping Update', 'Your order has been successfully placed.', 'Customer Service', '137Dolly_Littel@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=138', 'https://i.imgur.com/YfJQV5z.png?id=139', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "author" ("id", "name") VALUES ('9932ec74-907d-401b-b6f7-8029e96c82f4', 'Jane Austen');
INSERT INTO "author" ("id", "name") VALUES ('2a88b809-6a0b-4f53-8ab7-cad8d32d4228', 'George Orwell');
INSERT INTO "author" ("id", "name") VALUES ('9ed95209-758f-4f4f-9aae-7ef24fd01365', 'Harper Lee');
INSERT INTO "author" ("id", "name") VALUES ('4c85c88b-4d34-46b9-88c4-cffbbb045056', 'Harper Lee');
INSERT INTO "author" ("id", "name") VALUES ('e11838ab-d522-453d-b81e-ee3cb7f6178f', 'J.K. Rowling');
INSERT INTO "author" ("id", "name") VALUES ('bda68d49-e90c-459b-9d44-063659e7e861', 'George Orwell');
INSERT INTO "author" ("id", "name") VALUES ('d7762995-fdcb-4677-980b-c1b80bc52af0', 'Jane Austen');
INSERT INTO "author" ("id", "name") VALUES ('b0f24b6d-a169-4d70-a8bd-4d9aec8ed1c8', 'J.K. Rowling');
INSERT INTO "author" ("id", "name") VALUES ('3d10bad8-4236-45d3-ab87-96ce81c28d6c', 'George Orwell');
INSERT INTO "author" ("id", "name") VALUES ('939943c5-e93f-45c6-b481-95430cb879fd', 'Mark Twain');

INSERT INTO "category" ("id", "name") VALUES ('af779af7-5f99-47eb-8f01-bddbe012cb7d', 'Science Fiction');
INSERT INTO "category" ("id", "name") VALUES ('d46a9090-dc6d-49a1-90a5-db79b47db547', 'Science Fiction');
INSERT INTO "category" ("id", "name") VALUES ('0a362649-9875-4ea8-9381-b6ca60693c51', 'Mystery');
INSERT INTO "category" ("id", "name") VALUES ('97a43938-920e-4d62-82d7-93fb6d1dc51a', 'Science Fiction');
INSERT INTO "category" ("id", "name") VALUES ('326c4381-1fce-4c01-9d2f-35c7c2fb8d48', 'Romance');
INSERT INTO "category" ("id", "name") VALUES ('d1bb8ae5-c40b-43a1-bda3-f99920841c97', 'Mystery');
INSERT INTO "category" ("id", "name") VALUES ('6e049365-b591-4194-b07b-afb78cf89610', 'Mystery');
INSERT INTO "category" ("id", "name") VALUES ('2c606ab4-c568-434f-b3f2-9b6678eb1d91', 'Science Fiction');
INSERT INTO "category" ("id", "name") VALUES ('49e036e2-53f7-40b6-a78b-892841b38b62', 'Romance');
INSERT INTO "category" ("id", "name") VALUES ('d5193177-5f0b-46c4-ae31-6ba3e804730f', 'Science Fiction');

INSERT INTO "book" ("id", "title", "description", "price", "previewImageUrl", "authorId", "sellerId") VALUES ('ff5b2b91-3706-4757-a0a5-077b32d1d5f0', 'Where the Crawdads Sing', 'A memoir by Tara Westover recounting her journey from an isolated childhood to earning a PhD from Cambridge University.', 673, 'https://i.imgur.com/YfJQV5z.png?id=184', '9ed95209-758f-4f4f-9aae-7ef24fd01365', 'a1164ea2-2b42-4883-a79a-3b6a8a10a31c');
INSERT INTO "book" ("id", "title", "description", "price", "previewImageUrl", "authorId", "sellerId") VALUES ('217e48de-aada-4e3b-aa12-db7fa9823e4a', 'The Silent Patient', 'A fantastical love story set in a magical circus that only appears at night.', 831, 'https://i.imgur.com/YfJQV5z.png?id=189', '3d10bad8-4236-45d3-ab87-96ce81c28d6c', 'c8fe735e-4c86-47eb-8734-e025e8aa228b');
INSERT INTO "book" ("id", "title", "description", "price", "previewImageUrl", "authorId", "sellerId") VALUES ('30cd347f-41c7-41bb-a539-95efe16a13d7', 'The Night Circus', 'A gripping psychological thriller about a womans act of violence against her husbandand of the therapist obsessed with uncovering her motive.', 398, 'https://i.imgur.com/YfJQV5z.png?id=194', '9932ec74-907d-401b-b6f7-8029e96c82f4', 'f6a4e8a9-ec00-44e7-9a66-33e4ff48185e');
INSERT INTO "book" ("id", "title", "description", "price", "previewImageUrl", "authorId", "sellerId") VALUES ('d00ce59c-2338-468b-8018-496d1d64b117', 'Educated', 'A memoir by Tara Westover recounting her journey from an isolated childhood to earning a PhD from Cambridge University.', 27, 'https://i.imgur.com/YfJQV5z.png?id=199', '939943c5-e93f-45c6-b481-95430cb879fd', '81d109e1-2bf3-4621-b68f-ac1d3200b9ff');
INSERT INTO "book" ("id", "title", "description", "price", "previewImageUrl", "authorId", "sellerId") VALUES ('ecaf5b72-3df4-4b18-bfa5-223226c5bfd0', 'Where the Crawdads Sing', 'A memoir by Tara Westover recounting her journey from an isolated childhood to earning a PhD from Cambridge University.', 59, 'https://i.imgur.com/YfJQV5z.png?id=204', '9ed95209-758f-4f4f-9aae-7ef24fd01365', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "book" ("id", "title", "description", "price", "previewImageUrl", "authorId", "sellerId") VALUES ('253a9bcb-764b-43ca-a224-14295724638e', 'Educated', 'A fantastical love story set in a magical circus that only appears at night.', 123, 'https://i.imgur.com/YfJQV5z.png?id=209', 'b0f24b6d-a169-4d70-a8bd-4d9aec8ed1c8', '81d109e1-2bf3-4621-b68f-ac1d3200b9ff');
INSERT INTO "book" ("id", "title", "description", "price", "previewImageUrl", "authorId", "sellerId") VALUES ('4f866185-ef3a-4cc2-b86b-da7dd5997309', 'The Silent Patient', 'A memoir by Tara Westover recounting her journey from an isolated childhood to earning a PhD from Cambridge University.', 144, 'https://i.imgur.com/YfJQV5z.png?id=214', '4c85c88b-4d34-46b9-88c4-cffbbb045056', '81d109e1-2bf3-4621-b68f-ac1d3200b9ff');
INSERT INTO "book" ("id", "title", "description", "price", "previewImageUrl", "authorId", "sellerId") VALUES ('391ccbe3-4bc4-4bee-baae-bfb18a15c1fe', 'Becoming', 'Michelle Obamas deeply personal memoir chronicling her life from childhood to her years as First Lady.', 90, 'https://i.imgur.com/YfJQV5z.png?id=219', '9932ec74-907d-401b-b6f7-8029e96c82f4', '89ce81fe-b199-4f3f-963d-ff3470b8163b');
INSERT INTO "book" ("id", "title", "description", "price", "previewImageUrl", "authorId", "sellerId") VALUES ('c750de51-e27e-4af0-bc90-e230b288e832', 'Becoming', 'A gripping psychological thriller about a womans act of violence against her husbandand of the therapist obsessed with uncovering her motive.', 382, 'https://i.imgur.com/YfJQV5z.png?id=224', '9ed95209-758f-4f4f-9aae-7ef24fd01365', 'c8fe735e-4c86-47eb-8734-e025e8aa228b');
INSERT INTO "book" ("id", "title", "description", "price", "previewImageUrl", "authorId", "sellerId") VALUES ('7eb7a0a7-87a7-4c82-b5da-c09c618a9aae', 'The Night Circus', 'A gripping psychological thriller about a womans act of violence against her husbandand of the therapist obsessed with uncovering her motive.', 200, 'https://i.imgur.com/YfJQV5z.png?id=229', '2a88b809-6a0b-4f53-8ab7-cad8d32d4228', '9025982c-3727-420e-a1ff-6051bd648c5d');

INSERT INTO "book_category" ("id", "bookId", "categoryId") VALUES ('3c1648d8-7602-4b27-a8e8-8cc0d05377d4', '217e48de-aada-4e3b-aa12-db7fa9823e4a', 'af779af7-5f99-47eb-8f01-bddbe012cb7d');
INSERT INTO "book_category" ("id", "bookId", "categoryId") VALUES ('191ff6a3-8f72-4628-90bd-7e1b41a92dc9', '391ccbe3-4bc4-4bee-baae-bfb18a15c1fe', '97a43938-920e-4d62-82d7-93fb6d1dc51a');
INSERT INTO "book_category" ("id", "bookId", "categoryId") VALUES ('365d7009-28ab-4dfe-9530-719464242585', '7eb7a0a7-87a7-4c82-b5da-c09c618a9aae', 'd5193177-5f0b-46c4-ae31-6ba3e804730f');
INSERT INTO "book_category" ("id", "bookId", "categoryId") VALUES ('ed23c655-5d4a-47a0-8f7f-7ca7df2e9294', '391ccbe3-4bc4-4bee-baae-bfb18a15c1fe', '97a43938-920e-4d62-82d7-93fb6d1dc51a');
INSERT INTO "book_category" ("id", "bookId", "categoryId") VALUES ('e55404f5-20fc-448c-805d-8bcad1b5b614', '4f866185-ef3a-4cc2-b86b-da7dd5997309', '326c4381-1fce-4c01-9d2f-35c7c2fb8d48');
INSERT INTO "book_category" ("id", "bookId", "categoryId") VALUES ('72afb264-8504-4142-aab7-7fc2758e1eb4', '253a9bcb-764b-43ca-a224-14295724638e', 'd46a9090-dc6d-49a1-90a5-db79b47db547');
INSERT INTO "book_category" ("id", "bookId", "categoryId") VALUES ('2434da99-73fb-4149-a044-36f5cd35d1f6', '391ccbe3-4bc4-4bee-baae-bfb18a15c1fe', '97a43938-920e-4d62-82d7-93fb6d1dc51a');
INSERT INTO "book_category" ("id", "bookId", "categoryId") VALUES ('404b3782-7acf-4c68-a1ab-bf080dc491c4', '7eb7a0a7-87a7-4c82-b5da-c09c618a9aae', 'af779af7-5f99-47eb-8f01-bddbe012cb7d');
INSERT INTO "book_category" ("id", "bookId", "categoryId") VALUES ('e14c191a-8592-42b2-a27d-5803bc7db83d', 'c750de51-e27e-4af0-bc90-e230b288e832', '0a362649-9875-4ea8-9381-b6ca60693c51');
INSERT INTO "book_category" ("id", "bookId", "categoryId") VALUES ('63dab1aa-eded-462f-98ad-80e96964b815', 'd00ce59c-2338-468b-8018-496d1d64b117', '0a362649-9875-4ea8-9381-b6ca60693c51');

INSERT INTO "cart" ("id", "userId") VALUES ('8bb920ed-504b-4157-a384-4c3b2c5dfa35', '18dde728-4ceb-4003-be7f-69c7632a99a8');
INSERT INTO "cart" ("id", "userId") VALUES ('f43dfb42-6992-4fb2-9a3a-9806ed8d567f', '81d109e1-2bf3-4621-b68f-ac1d3200b9ff');
INSERT INTO "cart" ("id", "userId") VALUES ('e79a12da-0b72-409f-93a8-7fa79f43ff26', 'f6a4e8a9-ec00-44e7-9a66-33e4ff48185e');
INSERT INTO "cart" ("id", "userId") VALUES ('cfeabf93-7679-4962-9727-ae68b6649722', '6c676d7e-78d9-4a6e-a2d1-b3f14ccf45cd');
INSERT INTO "cart" ("id", "userId") VALUES ('de2d937b-59be-4d97-aa32-4f03603bb92d', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "cart" ("id", "userId") VALUES ('9a1c347b-3f8a-41b8-a3bd-6fa13ac9b325', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "cart" ("id", "userId") VALUES ('987bbf6a-83fc-4e49-927f-db7e3c024629', 'c8fe735e-4c86-47eb-8734-e025e8aa228b');
INSERT INTO "cart" ("id", "userId") VALUES ('3a802932-d267-4cd8-8945-bcebd64849b5', '9025982c-3727-420e-a1ff-6051bd648c5d');
INSERT INTO "cart" ("id", "userId") VALUES ('ca618acf-6445-406f-8794-1c8f7335160b', 'f6a4e8a9-ec00-44e7-9a66-33e4ff48185e');
INSERT INTO "cart" ("id", "userId") VALUES ('389af938-0178-4b7c-9fa3-bf5e8c6cd81f', '19289526-fce4-459e-bfbd-17f95070120d');

INSERT INTO "cart_item" ("id", "quantity", "cartId", "bookId") VALUES ('75b22dd9-f235-4573-a74b-35363f501e01', 121, '987bbf6a-83fc-4e49-927f-db7e3c024629', '391ccbe3-4bc4-4bee-baae-bfb18a15c1fe');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "bookId") VALUES ('d1601f7a-c6f6-4a0b-b70b-25e3aaa03504', 716, 'ca618acf-6445-406f-8794-1c8f7335160b', '217e48de-aada-4e3b-aa12-db7fa9823e4a');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "bookId") VALUES ('a1132346-03b5-4adb-8bf3-396dbb497327', 952, 'e79a12da-0b72-409f-93a8-7fa79f43ff26', 'ff5b2b91-3706-4757-a0a5-077b32d1d5f0');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "bookId") VALUES ('2de461a8-21a5-42e1-8425-246cac1a9ee8', 885, 'e79a12da-0b72-409f-93a8-7fa79f43ff26', 'ecaf5b72-3df4-4b18-bfa5-223226c5bfd0');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "bookId") VALUES ('c0370271-a56f-4279-a2f8-f3b09e5d882a', 682, 'f43dfb42-6992-4fb2-9a3a-9806ed8d567f', '4f866185-ef3a-4cc2-b86b-da7dd5997309');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "bookId") VALUES ('37a28d94-13a3-4fb4-95d2-8f493f4c0f89', 717, 'cfeabf93-7679-4962-9727-ae68b6649722', '4f866185-ef3a-4cc2-b86b-da7dd5997309');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "bookId") VALUES ('b6179a1e-dcb1-4b74-a285-06eb4985790b', 809, 'ca618acf-6445-406f-8794-1c8f7335160b', '7eb7a0a7-87a7-4c82-b5da-c09c618a9aae');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "bookId") VALUES ('ed9ace0c-7aee-499b-9998-3d80d0484eee', 967, '9a1c347b-3f8a-41b8-a3bd-6fa13ac9b325', 'c750de51-e27e-4af0-bc90-e230b288e832');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "bookId") VALUES ('a5483eab-8178-4bd4-a024-c1ae1ff3b3fa', 764, '987bbf6a-83fc-4e49-927f-db7e3c024629', '391ccbe3-4bc4-4bee-baae-bfb18a15c1fe');
INSERT INTO "cart_item" ("id", "quantity", "cartId", "bookId") VALUES ('a6d694c6-4147-4cbd-ad82-837e767cdfa8', 674, '9a1c347b-3f8a-41b8-a3bd-6fa13ac9b325', 'c750de51-e27e-4af0-bc90-e230b288e832');

INSERT INTO "order" ("id", "totalPrice", "userId") VALUES ('76339ccd-5ec4-44d7-ab1c-b7045f209049', 881, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "order" ("id", "totalPrice", "userId") VALUES ('b3bd5f58-c0a7-4bf6-a15d-63413f42d19a', 834, '6c676d7e-78d9-4a6e-a2d1-b3f14ccf45cd');
INSERT INTO "order" ("id", "totalPrice", "userId") VALUES ('48a4eb95-5866-457a-aa28-3e5a9a5b9f1b', 491, '18dde728-4ceb-4003-be7f-69c7632a99a8');
INSERT INTO "order" ("id", "totalPrice", "userId") VALUES ('5050e310-85f9-42aa-aea9-c7bf0ea83d47', 179, '9025982c-3727-420e-a1ff-6051bd648c5d');
INSERT INTO "order" ("id", "totalPrice", "userId") VALUES ('c32956cd-08eb-4878-ab21-b851db1dd71e', 267, '19289526-fce4-459e-bfbd-17f95070120d');
INSERT INTO "order" ("id", "totalPrice", "userId") VALUES ('75b41ebc-eefb-48ad-bf13-6d5355cc6926', 420, '9025982c-3727-420e-a1ff-6051bd648c5d');
INSERT INTO "order" ("id", "totalPrice", "userId") VALUES ('bf1c8381-df42-4a99-8a76-48ddad951112', 60, '9025982c-3727-420e-a1ff-6051bd648c5d');
INSERT INTO "order" ("id", "totalPrice", "userId") VALUES ('a1e0f9ea-6e92-4514-80c8-44417b60eb35', 392, 'f6a4e8a9-ec00-44e7-9a66-33e4ff48185e');
INSERT INTO "order" ("id", "totalPrice", "userId") VALUES ('c65aedbd-6b47-4275-8731-82c23be663fd', 849, 'a1164ea2-2b42-4883-a79a-3b6a8a10a31c');
INSERT INTO "order" ("id", "totalPrice", "userId") VALUES ('77521520-70af-42d0-ac2d-f59b787dbf70', 500, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "bookId") VALUES ('9afe270d-12ac-4519-aab1-04f5138dff07', 56, 82, 'c32956cd-08eb-4878-ab21-b851db1dd71e', 'd00ce59c-2338-468b-8018-496d1d64b117');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "bookId") VALUES ('5fe8ff6e-e1e2-48aa-8fec-087433bf2cb1', 791, 500, 'b3bd5f58-c0a7-4bf6-a15d-63413f42d19a', '4f866185-ef3a-4cc2-b86b-da7dd5997309');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "bookId") VALUES ('2db3dfae-fa5c-4150-ae50-f6f2a19d2184', 565, 842, '48a4eb95-5866-457a-aa28-3e5a9a5b9f1b', '253a9bcb-764b-43ca-a224-14295724638e');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "bookId") VALUES ('dae27bde-79f4-491e-8c8c-c8f3ae73e137', 991, 918, '75b41ebc-eefb-48ad-bf13-6d5355cc6926', 'd00ce59c-2338-468b-8018-496d1d64b117');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "bookId") VALUES ('3937edca-3ab0-4655-b6bd-b398ac7ad0b7', 380, 701, 'a1e0f9ea-6e92-4514-80c8-44417b60eb35', '4f866185-ef3a-4cc2-b86b-da7dd5997309');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "bookId") VALUES ('daf04cbf-febc-4a8a-a0f0-b32f19cdc1ef', 576, 467, 'c65aedbd-6b47-4275-8731-82c23be663fd', '391ccbe3-4bc4-4bee-baae-bfb18a15c1fe');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "bookId") VALUES ('b0a2d813-00f9-432a-ada5-013e057172f6', 600, 598, 'bf1c8381-df42-4a99-8a76-48ddad951112', 'c750de51-e27e-4af0-bc90-e230b288e832');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "bookId") VALUES ('2f331571-48ca-4cd6-92d0-bfcd1c4488dd', 93, 593, '75b41ebc-eefb-48ad-bf13-6d5355cc6926', 'ecaf5b72-3df4-4b18-bfa5-223226c5bfd0');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "bookId") VALUES ('60a8c818-283d-4e46-a9a0-9d1327fca356', 444, 42, 'bf1c8381-df42-4a99-8a76-48ddad951112', 'ecaf5b72-3df4-4b18-bfa5-223226c5bfd0');
INSERT INTO "order_item" ("id", "quantity", "price", "orderId", "bookId") VALUES ('2c567ec9-3684-4fd1-9ff7-c6252624fabc', 473, 739, '5050e310-85f9-42aa-aea9-c7bf0ea83d47', 'c750de51-e27e-4af0-bc90-e230b288e832');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
