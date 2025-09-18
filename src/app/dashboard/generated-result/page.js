"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function GeneratedResult() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const content = searchParams.get("content");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col px-4 sm:px-8 py-10">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between max-w-4xl mx-auto w-full mb-6">
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
          Social Media Post Result
        </h1>
        <div />
      </div>

      {/* Card */}
      <Card className="max-w-4xl mx-auto w-full shadow-md border border-gray-200 rounded-xl">
        <CardContent className="p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            ✨ Generated Post ✨
          </h2>

          {content ? (
            <div className="prose prose-sm sm:prose-base max-w-none text-gray-800 whitespace-pre-line leading-relaxed">
              {content}
            </div>
          ) : (
            <p className="text-gray-500">No content found. Please go back and generate again.</p>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3 mt-6">
            <Button
              onClick={() => navigator.clipboard.writeText(content || "")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Copy to Clipboard
            </Button>
            <Button variant="outline" onClick={() => router.back()}>
              Generate Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}