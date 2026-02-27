export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Solasi Media. All rights reserved.
      </div>
    </footer>
  );
}
