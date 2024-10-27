import { Coins } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ModeToggle } from '@/components/mode-toggle';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Coins className="h-10 w-10 text-primary" />
            <h1 className="text-2xl font-bold">Affiliate Program Finder</h1>
          </div>
          <ModeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Cut Through the <span className="text-muted-foreground">Noise</span>: Discover the Best{' '}
            <span className="text-primary">Affiliate Programs</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Built by Marketers for Marketers
          </p>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Programs</h2>
          <div className="grid place-items-center">
            <Card className="w-full max-w-md p-6">
              <div className="flex justify-center mb-4">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Coins className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Amazon Associates</h3>
              <p className="text-sm text-muted-foreground text-center">
                E-commerce Affiliate Program
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Sort By</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">
                Pricing Model:
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="cpa">CPA</SelectItem>
                  <SelectItem value="revshare">Revenue Share</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">
                Category:
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="trial" />
              <label htmlFor="trial">Free Trial</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="premium" />
              <label htmlFor="premium">Premium</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="staff" />
              <label htmlFor="staff">Staff Pick</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="budget" />
              <label htmlFor="budget">Budget Choice</label>
            </div>
          </div>
        </div>
      </section>

      {/* Program List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Amazon Program */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Amazon Associates</h3>
                  <p className="text-sm text-muted-foreground">E-commerce</p>
                </div>
              </div>
              <div className="text-green-600 text-sm mb-4">Free Program</div>
              <h4 className="font-semibold mb-2">Features:</h4>
              <ul className="list-disc list-inside mb-4 text-sm text-muted-foreground">
                <li>Up to 10% commission rates</li>
                <li>24-hour cookie duration</li>
                <li>Access to millions of products</li>
              </ul>
              <Button className="w-full">Learn More</Button>
            </Card>

            {/* ClickBank Program */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">ClickBank</h3>
                  <p className="text-sm text-muted-foreground">Digital Products</p>
                </div>
              </div>
              <div className="text-green-600 text-sm mb-4">Free Program</div>
              <h4 className="font-semibold mb-2">Features:</h4>
              <ul className="list-disc list-inside mb-4 text-sm text-muted-foreground">
                <li>Up to 75% commission rates</li>
                <li>60-day cookie duration</li>
                <li>Digital product marketplace</li>
              </ul>
              <Button className="w-full">Learn More</Button>
            </Card>

            {/* ShareASale Program */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">ShareASale</h3>
                  <p className="text-sm text-muted-foreground">Multi-Merchant</p>
                </div>
              </div>
              <div className="text-green-600 text-sm mb-4">Free Program</div>
              <h4 className="font-semibold mb-2">Features:</h4>
              <ul className="list-disc list-inside mb-4 text-sm text-muted-foreground">
                <li>Various commission structures</li>
                <li>3,900+ merchant programs</li>
                <li>Real-time tracking</li>
              </ul>
              <Button className="w-full">Learn More</Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}