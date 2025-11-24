"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

// 로그인 후 접근 가능페이지에서 로그인 안되있을시 뒤로가기 실행하는 훅
export function useRequireAuth() {
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인 먼저 진행해주세요");
      router.back();
    }
  }, [isLoggedIn, router]);
}
