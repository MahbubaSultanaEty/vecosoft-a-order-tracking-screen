import OrderCard from "@/components/OrderCard";
import {orders} from "@/data/orders";

export default function OrdersPage() {
  // console.log("orders", orders);
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">

      <section className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Order Tracking
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Track your delivery status and get updates.
          </p>
        </div>


        {/* Orders Grid */}
        <div
          className="
            grid 
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {
            orders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
              />
            ))
          }

        </div>

      </section>

    </main>
  );
}