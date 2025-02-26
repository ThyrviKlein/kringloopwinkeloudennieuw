"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { employees, type Employee } from "@/data/employees";

function EmployeeCard({ name, image, role, description }: Employee) {
  return (
    <Card className="overflow-hidden border-brand-teal/20 bg-gradient-to-br from-brand-teal/5 to-brand-green/5 transition-all hover:border-brand-teal/30 hover:shadow-lg">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 ring-2 ring-brand-teal/20">
            {image ? <AvatarImage src={image} alt={name} /> : null}
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl text-brand-teal">{name}</CardTitle>
            <CardDescription className="text-brand-green">
              {role}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export function EmployeeGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {employees.map((employee) => (
        <EmployeeCard key={employee.name} {...employee} />
      ))}
    </div>
  );
}
