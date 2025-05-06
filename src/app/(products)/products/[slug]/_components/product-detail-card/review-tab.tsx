import { FormEvent, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import { Card } from "@/components/ui/card";
import { Review } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useUserStore } from "@/store/use-user";
import Image from "next/image";
import Link from "next/link";

interface ReviewsTabProps {
  reviews: Review[]
  rating: number
}

export function ReviewsTab({ reviews, rating }: ReviewsTabProps) {
  const [userRating, setuserRating] = useState(0);

  const { data, isAuthenticated } = useUserStore()

  console.log(userRating)
  const ratingCounts = {
    5: 82,
    4: 30,
    3: 15,
    2: 6,
    1: 10,
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    // const response = await fetch('/api/submit', {
    //   method: 'POST',
    //   body: formData,
    // })

    // Handle response if necessary
    // const data = await response.json()

    try {
      if (userRating === 0) {
        toast.error("Please select a rating")
        return;
      }

      if (!data) {
        toast.error("Please login to submit a review")
        return;
      }

      const review: Review = {
        reviewerName: data?.name || "Anonymous",
        reviewerEmail: data?.email || "anonim@gmail.com",
        rating: userRating,
        comment: formData.get("comment") as string,
      }

      // Assuming you have a function to handle the review submission
      console.log("Review submitted:", review)
      toast.success("Review submitted successfully!")

    } catch (error) {
      toast.error("Error submitting review")
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 shadow-md">
        <h3 className="mb-4 text-xl font-bold">Customer reviews</h3>
        <div className="mb-6">
          <div className="mb-2 flex items-center">
            <span className="mr-2 text-4xl font-bold">{rating}</span>
            <div className="flex">
              <Rating
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
                value={rating}
                readOnly
                style={{ maxWidth: 100 }}
              />
            </div>
            <span className="ml-2 text-sm text-gray-500">({reviews.length} Reviews)</span>
          </div>
        </div>

        {Object.entries(ratingCounts)
          .sort((a, b) => Number(b[0]) - Number(a[0]))
          .map(([stars, percentage]) => (
            <div key={stars} className="mb-2 flex items-center">
              <span className="w-12 text-sm">{stars} Star</span>
              <div className="mx-4 h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-yellow-400"
                  style={{ width: `${percentage}%` }}
                  role="progressbar"
                  aria-valuenow={percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <span className="w-12 text-right text-sm text-gray-500">{percentage}%</span>
            </div>
          ))}
      </Card>

      {
        !isAuthenticated ? (
          <div className="relative">
            <Image
              src='/assets/img/product/review-preview.png'
              width={400}
              height={200}
              className="w-full"
              alt="Gudangorder review product"
            />
            <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm bg-white/10 h-full flex items-center justify-center rounded-md">
              <div className="bg-gray-200 p-4 rounded-xl">
                <h3 className="text-xl font-bold">Login to review this product</h3>
                <p className="text-sm text-gray-500">
                  Please login to submit a review.
                </p>
                <Button
                  asChild
                  className="hover:text-white"
                  variant='default'
                >
                  <Link
                    href="/login">
                    Log In
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="mb-2 text-xl font-bold">Review this product</h3>
            <p className="mb-4 text-sm text-gray-500">
              Your email address will not be published. Required fields are marked *
            </p>


            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="mb-2 block font-semibold">Your Rating <span className="text-red-500">*</span></label>
                <div className="w-[100px]">
                  <Rating
                    value={userRating}
                    style={{
                      maxWidth: 150
                    }}
                    onChange={setuserRating}
                    isRequired={true}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="review" className="mb-2 block font-semibold">
                  Your Review <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="comment"
                  rows={8}
                  placeholder="Write your review here..."
                  className="w-full rounded-md border border-gray-300 p-4 focus:border-blue-500 focus:outline-none min-h-[150px]"
                  required
                  name="comment"
                ></Textarea>
              </div>
              <Button type="submit" className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
                Submit Review
              </Button>
            </form>

            <div className="mt-8 shadow-none">
              <h3 className="mb-4 text-xl font-bold">Customer Reviews</h3>
              {reviews.map((review, idx) => (
                <div key={idx} className="mb-6 border-b border-gray-200 pb-6">
                  <div className="mb-2 flex items-center">
                    <div className="flex">
                      <Rating
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        value={rating}
                        readOnly
                        style={{ maxWidth: 100 }}
                      />
                    </div>
                    <span className="ml-2 text-sm font-medium">{review.reviewerName}</span>
                    <span className="ml-2 text-xs text-gray-500">- {review.date}</span>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div >
        )
      }

    </div >
  )
}
