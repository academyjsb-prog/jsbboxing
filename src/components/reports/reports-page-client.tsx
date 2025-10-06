
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Target, Shield, Heart, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const impactStats = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: '200+',
    label: 'Youth Trained',
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    value: '50+',
    label: 'National Medals',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    value: '10+',
    label: 'International Competitions',
  },
   {
    icon: <Heart className="h-8 w-8 text-primary" />,
    value: '100%',
    label: 'Free of Cost',
  },
];

const fundingData = [
  { name: 'Corporate Donations', value: 400 },
  { name: 'Individual Donors', value: 300 },
  { name: 'Grants', value: 200 },
  { name: 'Fundraising Events', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const yearlyGrowth = [
  { year: '2020', students: 50, medals: 10 },
  { year: '2021', students: 80, medals: 22 },
  { year: '2022', students: 120, medals: 35 },
  { year: '2023', students: 150, medals: 48 },
  { year: '2024', students: 200, medals: 55 },
];

const annualReports = [
    { year: '2023', filePath: '/reports/JSB-Annual-Report-2023.pdf' },
    { year: '2022', filePath: '/reports/JSB-Annual-Report-2022.pdf' },
    { year: '2021', filePath: '/reports/JSB-Annual-Report-2021.pdf' },
]


export default function ReportsPageClient() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">Our Impact</h1>
          <p className="mt-4 mx-auto text-base text-muted-foreground">
            Transparency and progress are at the heart of our mission. Here’s a look at what we’ve achieved together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat) => (
            <Card key={stat.label} className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader className="items-center pb-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-2">
                    {stat.icon}
                </div>
                <p className="text-4xl font-bold font-headline text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-semibold">{stat.label}</p>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className='font-headline'>Student Growth & Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={yearlyGrowth}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="students" fill="hsl(var(--primary))" name="Students Trained" />
                            <Bar dataKey="medals" fill="hsl(var(--accent-foreground))" name="Medals Won" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className='font-headline'>Funding Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                       <PieChart>
                          <Pie
                            data={fundingData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                            label={(entry) => `${entry.name} (${entry.value})`}
                          >
                            {fundingData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
        
        <div className="mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Annual Reports</h2>
                <p className="mt-4 max-w-3xl mx-auto text-base text-muted-foreground">
                    Download our detailed annual reports to see the full scope of our activities and financial transparency.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {annualReports.map((report) => (
                    <Card key={report.year} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="font-headline">Annual Report {report.year}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">Click below to download the PDF report for the year {report.year}.</p>
                             <Button asChild className="w-full">
                                <a href={report.filePath} download>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download PDF
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

         <div className="text-center">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Looking Ahead</h2>
            <p className="mt-4 max-w-3xl mx-auto text-base text-muted-foreground">
              Our goal for the next year is to expand our reach to two more villages, build a dedicated girls-only training facility, and send at least 10 of our boxers to international championships. Your continued support is crucial in making these dreams a reality.
            </p>
        </div>

      </div>
    </div>
  );
}
