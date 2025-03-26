"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const recentSearches = [
  { role: "Front-End Developer", candidates: 12 },
  { role: "Back-End Developer", candidates: 8 },
  { role: "Full Stack Developer", candidates: 15 },
  { role: "Data Scientist", candidates: 5 },
  { role: "DevOps Engineer", candidates: 10 },
];

export default function RecentSearches() {
  const [searches, setSearches] = useState(recentSearches);

  return (
    <div className="">
      <Card>
        <CardHeader>
          <CardTitle>Recent Job Role Searches</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {searches.map((search, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 border rounded-lg shadow-sm"
              >
                <div>
                  <h3 className="text-lg font-medium">{search.role}</h3>
                  <p className="text-sm text-gray-500">
                    {search.candidates} candidates available
                  </p>
                </div>
                <Button>View Candidates</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
