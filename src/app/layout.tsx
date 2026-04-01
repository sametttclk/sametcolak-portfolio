import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Samet Çolak Portfolio",
  description: "Java backend developer focused on secure systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-gray-800 shadow p-4">
          {" "}
          {/* bg-white → bg-gray-800 */}
          <nav className="max-w-5xl mx-auto flex justify-between items-center">
            <div className="font-bold text-xl text-white">Samet Çolak</div>{" "}
            {/* yazıyı beyaz yap */}
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-white hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-white hover:text-gray-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/lab" className="text-white hover:text-gray-300">
                  Lab
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/systems"
                  className="text-white hover:text-gray-300"
                >
                  Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
