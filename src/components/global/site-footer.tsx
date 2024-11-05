import { Link, Facebook, Twitter, Instagram, Github } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function SiteFooter() {
  return (
    <footer className="bg-gray-950 pt-40">
      <div className="container mx-auto px-4 py-16 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <p className="text-sm text-gray-100">
            Start trading with Metaex for free! Free to use - no credit card required!
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-gray-100 hover:text-gray-100">Home</a></li>
              <li><a href="/" className="text-sm text-gray-100 hover:text-gray-100">Copy Trading</a></li>
              <li><a href="/signup" className="text-sm text-gray-100 hover:text-gray-100">Assets Management</a></li>
              <li><a href="/signup" className="text-sm text-gray-100 hover:text-gray-100">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-yellow-200">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-yellow-200">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-yellow-200">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-yellow-200">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <form className="space-y-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-gray-100">
            © {new Date().getFullYear()} Metaex. All rights reserved | Powered by Navdisenyo
          </p>
        </div>
      </div>
    </footer>
  )
}
