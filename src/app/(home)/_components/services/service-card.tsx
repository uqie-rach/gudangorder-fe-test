import { Card, CardContent } from "@/components/ui/card";

export function ServiceCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <Card className="shadow-none bg-gray-100 rounded-none border-0">
      <CardContent className="flex flex-col sm:flex-row sm:items-start items-center justify-center gap-2 md:gap-3 p-3">
        <span className="text-2xl text-red-500">{icon}</span>
        <span>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-muted-foreground m-0">{description}</p>
        </span>
      </CardContent>
    </Card>
  )
}
