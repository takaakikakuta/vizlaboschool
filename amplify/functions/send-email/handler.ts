import type { Schema } from "../../data/resource"

import axios from 'axios';
import crypto from 'crypto';

import { env } from '$amplify/env/send-email'; // the import is '$amplify/env/<function-name>'
import { text } from "stream/consumers";

const generateBearerToken = (): string => {
  const loginId = process.env.BLASTENGINE_LOGIN_ID; // ログインID
  const apiKey = process.env.BLASTENGINE_API_KEY; // APIキー

  if (!loginId || !apiKey) {
    throw new Error('BlastengineのログインIDまたはAPIキーが設定されていません。');
  }

  // SHA256でハッシュ化し、Base64エンコード
  const hash = crypto
    .createHash('sha256')
    .update(`${loginId}${apiKey}`)
    .digest('hex')
    .toLowerCase();

  return Buffer.from(hash).toString('base64');
};

export const handler: Schema["sendMail"]["functionHandler"] = async (event) => {

  try {
    // Bearerトークン生成
    const bearerToken = generateBearerToken();

     // FormData を見やすく整形
     const formDataText = `
     【内容】
     ----------------------------
     📝 名前: ${event.arguments.name}
     🏢 会社名: ${event.arguments.company}
     🏬 部署名: ${event.arguments.department}
     📧 メールアドレス: ${event.arguments.email}
     💡 メッセージ:
     ${event.arguments.message}
     ----------------------------`;

     const qupon = "Vizlaboschool2026"

    // Blastengineにメール送信リクエストを送信(管理者)
    const blastengineResponse = await axios.post(
      'https://app.engn.jp/api/v1/deliveries/transaction', // トランザクションメールの送信エンドポイント
      {
        from: { email: 'vizlabo@update', name: 'Vizlabo' }, // 送信元
        to: "soci0926@gmail.com", // 送信先
        subject: `【応募】${event.arguments.name}様_【要件】${event.arguments.category}`, // 件名
        text_part: event.arguments.message
      },
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`, // 生成したBearerトークンを使用
          'Content-Type': 'application/json'
        }
      }
    );

    const userText = `
      ${event.arguments.name} 様

      この度は${event.arguments.category}いただきありがとうございます。
      内容を受け付けました。開講した際には改めてご連絡いたします。

      ▼ お送りいただいた内容
      ${event.arguments.message}

      ■ ご案内
      ・こちらは送信専用のアドレスとなっております。
      ・不明な点に関しては問合せからご連絡お願いいたします
      ・万一、手違いの場合は本メール破棄をお願いいたします

      Vizlabo School
      `.trim();

     // Blastengineにメール送信リクエストを送信(申し込み)
    const blastengineResponse2 = await axios.post(
      'https://app.engn.jp/api/v1/deliveries/transaction', // トランザクションメールの送信エンドポイント
      {
        from: { email: 'noreply@vizlabo.com', name: 'Vizlabo' }, // 送信元
        to: `${event.arguments.email}`, // 送信先
        subject: `メール受付完了の連絡`, // 件名
        text_part: `${userText}`
      },
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`, // 生成したBearerトークンを使用
          'Content-Type': 'application/json'
        }
      }
    );

  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios のエラーオブジェクトに安全にアクセス
      console.error('Axios error occurred:', error.response?.data || error.message);
    } else if (error instanceof Error) {
      // 通常のエラーオブジェクト
      console.error('An error occurred:', error.message);
    } else {
      // 型が特定できない場合
      console.error('An unknown error occurred:', error);
    }
  }

  // Bearerトークンを生成
  return `Hello, ${env.BLASTENGINE_LOGIN_ID}!`
}