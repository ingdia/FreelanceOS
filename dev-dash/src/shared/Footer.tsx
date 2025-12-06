import { Briefcase } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              FreelancerOS
            </span>
            <span className="hidden sm:inline text-sm text-gray-600 dark:text-gray-400">
              © {currentYear}
            </span>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span>Made with 💜 for freelancers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;