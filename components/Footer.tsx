import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-12 border-t border-[#E0E0E0] bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#999999]">
          Powder Pass © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#999999] hover:text-[#111111] transition-colors"
            aria-label="Instagram"
          >
            Instagram
          </Link>
          <Link
            href="mailto:hello@powderpass.com"
            className="text-sm text-[#999999] hover:text-[#111111] transition-colors"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
