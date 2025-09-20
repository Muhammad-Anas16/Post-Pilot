"use client";

import { SignUp } from '@clerk/nextjs';
import AuthRedirect from "@/component/common/AuthRedirect";

export default function Page() {
    return (
      <>
        <AuthRedirect />
        <section className="flex justify-center items-center lg:h-[95vh] p-4">
          <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
            <SignUp 
              afterSignUpUrl="/dashboard"
              redirectUrl="/dashboard"
            />
          </div>
        </section>
      </>
    );
}