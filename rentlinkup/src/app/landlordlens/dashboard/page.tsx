import Link from "next/link"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <div className="flex flex-1">
        <aside className="hidden w-64 flex-col border-r border-gray-200 bg-gray-50 md:flex">
          <div className="flex h-14 items-center border-b border-gray-200 px-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-black">
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
                  R
                </div>
              </div>
              <span className="text-xl font-bold">LandlordLens</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="px-4 py-2">
              <h2 className="mb-2 text-xs font-semibold text-gray-500">Dashboard</h2>
              <div className="space-y-1">
                <Link href="/landlordlens/dashboard">
                  <button className="inline-flex w-full items-center justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Overview
                  </button>
                </Link>
                <Link href="/landlordlens/dashboard/properties">
                  <button className="inline-flex w-full items-center justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Properties
                  </button>
                </Link>
                <Link href="/landlordlens/dashboard/tenants">
                  <button className="inline-flex w-full items-center justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    Tenants
                  </button>
                </Link>
                <Link href="/landlordlens/dashboard/finances">
                  <button className="inline-flex w-full items-center justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                    Finances
                  </button>
                </Link>
                <Link href="/landlordlens/dashboard/calendar">
                  <button className="inline-flex w-full items-center justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                    Calendar
                  </button>
                </Link>
              </div>
            </div>
            <div className="px-4 py-2">
              <h2 className="mb-2 text-xs font-semibold text-gray-500">Settings</h2>
              <div className="space-y-1">
                <Link href="/landlordlens/dashboard/settings">
                  <button className="inline-flex w-full items-center justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    Settings
                  </button>
                </Link>
                <Link href="/landlordlens/logout">
                  <button className="inline-flex w-full items-center justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" x2="9" y1="12" y2="12"></line>
                    </svg>
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </aside>
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-gray-200 bg-white px-4 sm:px-6">
            <div className="flex flex-1 items-center gap-4">
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span className="sr-only">Toggle sidebar</span>
              </button>
              <div className="relative w-full max-w-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input
                  type="search"
                  placeholder="Search..."
                  className="flex h-9 w-full rounded-md border border-gray-200 bg-white pl-8 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 md:w-[300px] lg:w-[400px]"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
                <span className="sr-only">Notifications</span>
              </button>
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-500">
                  JD
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-4 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <div className="flex gap-2">
                <button className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Add Property
                </button>
                <button className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Add Tenant
                </button>
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
              {[
                {
                  title: "Total Properties",
                  value: "12",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  ),
                  iconBg: "bg-gray-100"
                },
                {
                  title: "Total Tenants",
                  value: "28",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  ),
                  iconBg: "bg-gray-100"
                },
                {
                  title: "Monthly Income",
                  value: "$24,500",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green-500">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  ),
                  iconBg: "bg-green-100",
                  trend: {
                    value: "+5.2% from last month",
                    direction: "up",
                    color: "text-green-500"
                  }
                },
                {
                  title: "Vacancy Rate",
                  value: "8.3%",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-orange-500">
                      <line x1="18" x2="18" y1="20" y2="10"></line>
                      <line x1="12" x2="12" y1="20" y2="4"></line>
                      <line x1="6" x2="6" y1="20" y2="14"></line>
                    </svg>
                  ),
                  iconBg: "bg-orange-100",
                  trend: {
                    value: "+2.1% from last month",
                    direction: "down",
                    color: "text-red-500"
                  }
                }
              ].map((stat, i) => (
                <div key={i} className="rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                        <h3 className="text-2xl font-bold">{stat.value}</h3>
                      </div>
                      <div className={`rounded-full ${stat.iconBg} p-3`}>
                        {stat.icon}
                      </div>
                    </div>
                    {stat.trend && (
                      <div className={`flex items-center gap-1 text-xs ${stat.trend.color} mt-2`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                          {stat.trend.direction === "up" ? (
                            <path d="m5 12 7-7 7 7M5 19l7-7 7 7"></path>
                          ) : (
                            <path d="m19 12-7 7-7-7M19 5l-7 7-7-7"></path>
                          )}
                        </svg>
                        <span>{stat.trend.value}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
              <div className="col-span-2 rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-bold">Properties Overview</h2>
                  <p className="text-sm text-gray-500">
                    Your property portfolio at a glance
                  </p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-4 rounded-lg border border-gray-200 p-3">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md bg-gray-100">
                          <Image
                            src="/images/hero1.jpeg"
                            alt={`Property ${i}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">Apartment {i}</h4>
                            <span className={`inline-flex items-center rounded-md ${i % 2 === 0 ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'} px-2 py-1 text-xs font-medium`}>
                              {i % 2 === 0 ? "Occupied" : "Vacant"}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">123 Main St, Unit {i}</p>
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-medium">${(1500 + i * 200).toLocaleString()}/mo</span>
                            <span className="text-sm text-gray-500">2 bed, 2 bath</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <button className="inline-flex h-9 w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                      View All Properties
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-bold">Upcoming Events</h2>
                  <p className="text-sm text-gray-500">
                    Your schedule for the next few days
                  </p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[
                      {
                        month: "MAR",
                        day: "28",
                        title: "Property Viewing",
                        location: "123 Main St, Unit 2",
                        time: "2:00 PM - 3:00 PM"
                      },
                      {
                        month: "MAR",
                        day: "29",
                        title: "Lease Signing",
                        location: "456 Oak St, Unit 3",
                        time: "10:00 AM - 11:00 AM"
                      },
                      {
                        month: "MAR",
                        day: "30",
                        title: "Maintenance Visit",
                        location: "789 Pine St, Unit 1",
                        time: "3:30 PM - 5:00 PM"
                      }
                    ].map((event, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="flex flex-col items-center">
                          <div className="rounded-md bg-gray-100 px-2 py-1 text-xs font-semibold">
                            {event.month}
                          </div>
                          <div className="text-lg font-bold">{event.day}</div>
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-medium">{event.title}</h4>
                          <p className="text-sm text-gray-500">{event.location}</p>
                          <p className="text-sm text-gray-500">{event.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <button className="inline-flex h-9 w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                      View Calendar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="col-span-2 rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-bold">Recent Activity</h2>
                  <p className="text-sm text-gray-500">
                    Latest updates from your properties
                  </p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[
                      {
                        name: "John Doe",
                        initials: "JD",
                        action: "paid rent for",
                        target: "Apartment 3",
                        time: "Today at 9:42 AM"
                      },
                      {
                        name: "Sarah Miller",
                        initials: "SM",
                        action: "submitted a maintenance request for",
                        target: "Apartment 5",
                        time: "Yesterday at 4:15 PM"
                      },
                      {
                        name: "Robert Johnson",
                        initials: "RJ",
                        action: "signed a new lease for",
                        target: "Apartment 2",
                        time: "Mar 26, 2025 at 11:30 AM"
                      },
                      {
                        name: "Lisa Wong",
                        initials: "LW",
                        action: "requested a lease renewal for",
                        target: "Apartment 7",
                        time: "Mar 25, 2025 at 2:45 PM"
                      }
                    ].map((activity, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="relative h-9 w-9 overflow-hidden rounded-full bg-gray-200">
                          <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-500">
                            {activity.initials}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm">
                            <span className="font-medium">{activity.name}</span> {activity.action}{" "}
                            <span className="font-medium">{activity.target}</span>
                          </p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <button className="inline-flex h-9 w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                      View All Activity
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-bold">Rent Collection</h2>
                  <p className="text-sm text-gray-500">
                    Current month's rent status
                  </p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Collected</span>
                        <span className="text-sm font-medium">$18,500</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-2 rounded-full bg-green-500" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Pending</span>
                        <span className="text-sm font-medium">$4,500</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-2 rounded-full bg-orange-500" style={{ width: "18%" }}></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Overdue</span>
                        <span className="text-sm font-medium">$1,500</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div className="h-2 rounded-full bg-red-500" style={{ width: "7%" }}></div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <h4 className="text-sm font-medium mb-2">Tenants with Overdue Rent</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-2">
                          <div className="flex items-center gap-2">
                            <div className="relative h-6 w-6 overflow-hidden rounded-full bg-gray-200">
                              <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-500">
                                MJ
                              </div>
                            </div>
                            <span className="text-sm">Michael Johnson</span>
                          </div>
                          <span className="text-sm font-medium text-red-500">$1,500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <button className="inline-flex h-9 w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950">
                      Send Reminders
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

