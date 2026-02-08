"use client";

import { Product } from "lib/shopify/types";
import { LinkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

interface SocialShareProps {
  product: Product;
}

// Social media handle - update this to match your brand
const SOCIAL_HANDLE = "@commondad";

export function SocialShare({ product }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [productUrl, setProductUrl] = useState("");

  // Set URL on client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      setProductUrl(`${window.location.origin}/product/${product.handle}`);
    }
  }, [product.handle]);

  const shareTitle = `Check out ${product.title} from ${SOCIAL_HANDLE}`;
  const shareDescription = product.description
    ? `${product.description.slice(0, 100)}... ${SOCIAL_HANDLE}`
    : `Found this on ${SOCIAL_HANDLE}`;

  const handleCopyLink = async () => {
    const url = productUrl || `/product/${product.handle}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const openShareWindow = (url: string) => {
    window.open(url, "_blank", "width=600,height=400");
  };

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(productUrl)}&text=${encodeURIComponent(shareTitle)}&hashtags=shop,commondad`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(productUrl)}&description=${encodeURIComponent(shareDescription)}&media=${encodeURIComponent(product.featuredImage?.url || "")}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareTitle} ${productUrl}`)}`,
    email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`${shareDescription}\n\n${productUrl}`)}`,
  };

  return (
    <div className="mt-6 border-t border-neutral-200 pt-6 dark:border-neutral-700">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
          Share:
        </span>
        <div className="flex items-center gap-2">
          {/* Twitter/X */}
          <button
            type="button"
            onClick={() => openShareWindow(shareUrls.twitter)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-[#1DA1F2] hover:text-white dark:bg-neutral-800"
            aria-label="Share on Twitter"
            title="Share on Twitter"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <title>Twitter</title>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>

          {/* Facebook */}
          <button
            type="button"
            onClick={() => openShareWindow(shareUrls.facebook)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-[#1877F2] hover:text-white dark:bg-neutral-800"
            aria-label="Share on Facebook"
            title="Share on Facebook"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <title>Facebook</title>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>

          {/* Pinterest */}
          <button
            type="button"
            onClick={() => openShareWindow(shareUrls.pinterest)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-[#BD081C] hover:text-white dark:bg-neutral-800"
            aria-label="Share on Pinterest"
            title="Share on Pinterest"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <title>Pinterest</title>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
          </button>

          {/* WhatsApp */}
          <button
            type="button"
            onClick={() => openShareWindow(shareUrls.whatsapp)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-[#25D366] hover:text-white dark:bg-neutral-800"
            aria-label="Share on WhatsApp"
            title="Share on WhatsApp"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <title>WhatsApp</title>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </button>

          {/* Email */}
          <button
            type="button"
            onClick={() => {
              window.location.href = shareUrls.email;
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-neutral-600 hover:text-white dark:bg-neutral-800"
            aria-label="Share via Email"
            title="Share via Email"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <title>Email</title>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </button>

          {/* Copy Link */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-terracotta-600 hover:text-white dark:bg-neutral-800"
            aria-label="Copy link"
            title="Copy link"
          >
            {copied ? (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Copied</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <LinkIcon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
      {copied && (
        <p className="mt-2 text-sm text-green-600">Link copied to clipboard!</p>
      )}
    </div>
  );
}
