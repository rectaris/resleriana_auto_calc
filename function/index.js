const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// 外部データベースの参照
const externalDb = admin.firestore().collection('external-collection');

// GitHub Pagesのデータベースの参照
const githubPagesDb = admin.firestore().collection('github-pages-collection');

// 外部データベースの更新を検知
exports.syncData = functions.firestore
    .document('external-collection/{docId}')
    .onWrite(async (change, context) => {
        const newValue = change.after.data();
        const docId = context.params.docId;

        // GitHub Pagesのデータベースにデータを同期
        await githubPagesDb.doc(docId).set(newValue);
    });