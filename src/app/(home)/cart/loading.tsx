import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CartLoading() {
    return (
        <div className="container mx-auto px-4 py-8 !animate-none">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-3/4">
                    <Table>
                        <TableHeader className="bg-gray-100">
                            <TableRow>
                                <TableHead className="w-[50%]">Product</TableHead>
                                <TableHead className="text-center">Price</TableHead>
                                <TableHead className="text-center">Quantity</TableHead>
                                <TableHead className="text-center">Total</TableHead>
                                <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array.from({ length: 2 }).map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <div className="flex gap-4">
                                            <Skeleton className="w-20 h-20 rounded-md" />
                                            <div className="space-y-2">
                                                <Skeleton className="h-5 w-40" />
                                                <Skeleton className="h-4 w-20" />
                                                <Skeleton className="h-4 w-32" />
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <div className="flex flex-col items-center gap-1">
                                            <Skeleton className="h-5 w-20" />
                                            <Skeleton className="h-4 w-16" />
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <div className="flex justify-center">
                                            <Skeleton className="h-9 w-28 rounded-md" />
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <div className="flex justify-center">
                                            <Skeleton className="h-5 w-20" />
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex justify-center">
                                            <Skeleton className="h-6 w-6 rounded-full" />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    <div className="mt-8">
                        <div className="flex flex-col items-start1q gap-2">
                            <Skeleton className="h-5 w-24" />
                            <div className="flex">
                                <Skeleton className="h-10 w-48 rounded-l-md" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/4">
                    <div className="border p-6 rounded-md">
                        <div className="flex justify-between mb-4">
                            <Skeleton className="h-6 w-20" />
                            <Skeleton className="h-6 w-24" />
                        </div>

                        <div className="flex justify-between mb-4">
                            <Skeleton className="h-5 w-12" />
                            <Skeleton className="h-5 w-20" />
                        </div>

                        <div className="flex justify-between mb-2">
                            <Skeleton className="h-6 w-16" />
                            <Skeleton className="h-6 w-24" />
                        </div>

                        <Skeleton className="h-4 w-48 mb-6" />

                        <Skeleton className="h-12 w-full mb-4" />

                        <div className="flex justify-center">
                            <Skeleton className="h-5 w-32" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
