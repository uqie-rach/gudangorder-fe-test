import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function CategoryCard({ title, image }: { title: string; image: string }) {
  return (
    <Card className="shadow-none bg-category-radial-gradient rounded-full aspect-square flex justify-center items-center w-[150px] md:w-[200px]">
      <CardContent className="flex flex-col items-center justify-center p-2">
        <Image src={image} alt={title} width={100} height={100} className="mb-2 rounded-full h-10 w-10 sm:h-16 sm:w-16 aspect-square object-contain" />
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-xs text-muted-foreground">20 Products</p>
      </CardContent>
    </Card>
  )
}
