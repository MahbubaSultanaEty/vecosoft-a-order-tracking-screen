"use client";

import {
  Card,
  ProgressBar,
  Label,
  Button,
} from "@heroui/react";

import {
  AlertTriangle,
  PackageCheck,
  Truck,
  Clock,
  Package,
  RotateCcw,
  XCircle,
  Pause,
  MapPinOff,
} from "lucide-react";


const statusConfig = {
  delayed: {
    title: "Delivery Delayed",
    icon: AlertTriangle,
    color: "text-orange-600",
    bg: "bg-orange-50",
    progress: 60,
    progressColor: "bg-orange-500",
    message: "Your order is taking longer than expected.",
  },

  delivered: {
    title: "Delivered",
    icon: PackageCheck,
    color: "text-green-600",
    bg: "bg-green-50",
    progress: 100,
    progressColor: "bg-green-500",
    message: "Your order has been delivered successfully.",
  },

  out_for_delivery: {
    title: "Out for Delivery",
    icon: Truck,
    color: "text-blue-600",
    bg: "bg-blue-50",
    progress: 85,
    progressColor: "bg-blue-500",
    message: "Your order is on the way.",
  },

  processing: {
    title: "Processing",
    icon: Clock,
    color: "text-blue-600",
    bg: "bg-blue-50",
    progress: 40,
    progressColor: "bg-blue-400",
    message: "Your order is being prepared.",
  },

  shipped: {
    title: "Shipped",
    icon: Package,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    progress: 60,
    progressColor: "bg-indigo-500",
    message: "Your order has been shipped.",
  },

  returned: {
    title: "Returned",
    icon: RotateCcw,
    color: "text-purple-600",
    bg: "bg-purple-50",
    progress: 100,
    progressColor: "bg-purple-500",
    message: "This order has been returned.",
  },

  cancelled: {
    title: "Cancelled",
    icon: XCircle,
    color: "text-red-600",
    bg: "bg-red-50",
    progress: 0,
    progressColor: "bg-red-500",
    message: "This order has been cancelled.",
  },

  on_hold: {
    title: "On Hold",
    icon: Pause,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    progress: 40,
    progressColor: "bg-yellow-500",
    message: "Your order is currently on hold.",
  },

  delivered_not_received: {
    title: "Package Not Received?",
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-50",
    progress: 100,
    progressColor: "bg-red-500",
    message:
      "Your order was marked delivered, but you haven't received it.",
  },

  tracking_unavailable: {
    title: "Tracking Not Available Yet",
    icon: MapPinOff,
    color: "text-blue-600",
    bg: "bg-blue-50",
    progress: 20,
    progressColor: "bg-blue-400",
    message:
      "Tracking information will appear once the courier picks it up.",
  },
};


export default function OrderCard({ order }) {

  const config =
    statusConfig[order.status] || statusConfig.processing;


  const StatusIcon = config.icon;


  return (
    <Card className="w-full">

      <Card.Header className={`${config.bg} rounded-t-xl`}>

        <div className="flex items-center gap-3">

          <div
            className={`rounded-full bg-white p-2 ${config.color}`}
          >
            <StatusIcon size={20} />
          </div>


          <div>

            <Card.Title>
              {config.title}
            </Card.Title>


            <Card.Description>
              {config.message}
            </Card.Description>

          </div>

        </div>

      </Card.Header>



      <Card.Content className="space-y-5">


        {/* Product */}

        <div className="flex gap-3">

          <img
            src={order.product.image}
            alt={order.product.name}
            className="h-16 w-16 rounded-lg object-cover"
          />


          <div className="min-w-0">

            <h3 className="truncate font-medium">
              {order.product.name}
            </h3>


            <p className="text-sm text-gray-500">
              Order ID: {order.id}
            </p>


            <p className="text-sm text-gray-500">
              Qty: {order.product.quantity}
            </p>

          </div>

        </div>



        {/* Progress */}

        <ProgressBar value={config.progress}>

          <Label>
            Delivery Progress
          </Label>


          <ProgressBar.Output />


          <ProgressBar.Track>

            <ProgressBar.Fill
              className={config.progressColor}
            />

          </ProgressBar.Track>


        </ProgressBar>



        {/* Timeline */}

        <div className="space-y-3">

          {
            order.timeline.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >

                <div
                  className={`h-3 w-3 rounded-full ${
                    step.completed
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                />


                <div>

                  <p
                    className={`text-sm ${
                      step.completed
                        ? "font-medium"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </p>


                  {
                    step.date && (
                      <p className="text-xs text-gray-500">
                        {step.date}
                      </p>
                    )
                  }

                </div>

              </div>
            ))
          }

        </div>



        {/* Delivery */}

        {
          order.updatedDelivery ? (

            <div>

              <p className="text-sm text-gray-500">
                Updated Delivery
              </p>


              <p className="font-medium">
                {order.updatedDelivery.date}{" "}
                {order.updatedDelivery.time}
              </p>

            </div>

          ) : order.estimatedDelivery?.date && (

            <div>

              <p className="text-sm text-gray-500">
                Estimated Delivery
              </p>


              <p className="font-medium">
                {order.estimatedDelivery.date}{" "}
                {order.estimatedDelivery.time}
              </p>

            </div>

          )
        }


      </Card.Content>



      <Card.Footer className="flex gap-2">


        {
          order.status === "delayed" && (
            <Button>
              Contact Support
            </Button>
          )
        }


        {
          order.status === "delivered_not_received" && (
            <Button>
              Report Issue
            </Button>
          )
        }


        {
          order.status === "tracking_unavailable" && (
            <Button>
              Refresh Tracking
            </Button>
          )
        }


        {
          ![
            "delayed",
            "delivered_not_received",
            "tracking_unavailable",
          ].includes(order.status) && (
            <Button>
              View Details
            </Button>
          )
        }


      </Card.Footer>

    </Card>
  );
}