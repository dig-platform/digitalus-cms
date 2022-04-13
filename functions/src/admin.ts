import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {CallableContext} from "firebase-functions/lib/common/providers/https";

export const setAdminClaim = functions.firestore
    .document("admin_users/{docId}")
    .onCreate(async (change) => {
      const uid = change.id;
      await admin.auth().setCustomUserClaims(uid, {admin: true});
    });

export const removeAdminClaim = functions.firestore
    .document("admin_users/{docId}")
    .onDelete(async (change) => {
      const uid = change.id;
      await admin.auth().setCustomUserClaims(uid, null);
    });

export const isAdmin = (context: CallableContext) => {
  return context.auth?.token.admin;
};
