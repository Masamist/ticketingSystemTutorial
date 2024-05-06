import { Card, CardTitle, CardHeader, CardDescription, CardContent } from "./ui/card"
import React from 'react'
import { Prisma } from "@prisma/client"
import Link from "next/link"
import TicketStatusBadge from "./TicketStatusBadge"
import TicketPriority from "./TicketPriority"

type TicketWithUser = Prisma.TicketGetPayload<{
  include: {assignedToUser: true }
}>

interface Props {
  tickets: TicketWithUser[]
}

const DashRecentTickets = ({ tickets}: Props) => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recently Updated</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {tickets ? tickets.map((ticket) => (
            <div key={ticket.id} className="flex items-center">
              <TicketStatusBadge status={ticket.status} />
              <div className="ml-4 space-y-1">
                <Link href={`tickets/${ticket.id}`}>
                  <p>{ticket.title}</p>
                  <p>{ticket.assignedToUser?.name || "Unassigned"}</p>
                </Link>
              </div>
              <div className= "ml-auto font-medium">
                <TicketPriority priority={ticket.priority} /> 
              </div>
            </div>
            )) : null }
        </div>
      </CardContent>
    </Card>
  )
}

export default DashRecentTickets