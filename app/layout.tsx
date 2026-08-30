import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "可执行的智慧｜互动算法文明史",
  description: "从古代计算术到现代科学工程，一部可以亲手运行的算法史。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
