import Link from "next/link"
import { TrendingUp } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="border-t py-12 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Traders Circle</span>
            </div>
            <p className="text-muted-foreground">The premier platform for copy trading with verified expert traders.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/masters" className="text-muted-foreground hover:text-primary">
                  Top Traders
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/risk" className="text-muted-foreground hover:text-primary">
                  Risk Disclosure
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-muted-foreground hover:text-primary">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">support@traderscircle.ng</li>
              <li className="text-muted-foreground">+234 (0) 123-456-7890</li>
              <li className="text-muted-foreground">Lagos, Nigeria</li>
              <li className="text-muted-foreground">WhatsApp: +234 (0) 123-456-7890</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Traders Circle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
