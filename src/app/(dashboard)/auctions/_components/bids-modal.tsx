"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface Bid {
  bidderName: string;
  biddingTime: string;
  amount: number;
  auto: boolean;
}

interface BidsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SAMPLE_BIDS: Bid[] = [
  {
    bidderName: "Oregon Greener",
    biddingTime: "15 Sep, 2025",
    amount: 700.0,
    auto: false
  },
  {
    bidderName: "Martony Guiang",
    biddingTime: "8 Sep, 2025",
    amount: 135.0,
    auto: false
  },
  {
    bidderName: "Auction started",
    biddingTime: "5 Sep, 2025",
    amount: 135.0,
    auto: false
  },
  {
    bidderName: "Osama Umrani",
    biddingTime: "1 Sep, 2025",
    amount: 135.0,
    auto: false
  }
];

export function BidsModal({ isOpen, onClose }: BidsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[1250px]">
        <DialogHeader>
          <div className="flex items-center justify-between bg-primary text-white p-4 -mx-6 -mt-6 rounded-t-lg">
            <DialogTitle className="text-xl">Bids</DialogTitle>
            <Button
              variant="ghost"
              onClick={onClose}
              className="text-[#1e2f65] hover:text-white hover:bg-primary bg-white"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to List
            </Button>
          </div>
        </DialogHeader>
        <div className="mt-4 max-w-[1250px]">
          <div className="mb-4">
            <p className="text-[20px] text-gradient font-semibold mb-1">
              Total Bids Placed:
            </p>
            <p className="text-[16px] text-[#3D3D3D] font-normal leading-[19.2px]">
              Auction has Live
            </p>
            <p className="text-[16px] text-[#3D3D3D] font-normal leading-[19.2px]">
              Highest bidder was: Oregon Greener
            </p>
          </div>
          <Table className="px-0 text-center">
            <TableHeader >
              <TableRow >
                <TableHead className="text-center">Bidder Name</TableHead>
                <TableHead className="text-center">Bidding Time</TableHead>
                <TableHead className="text-center">Bid</TableHead>
                <TableHead className="text-center">Auto</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SAMPLE_BIDS.map((bid, index) =>
                <TableRow key={index}>
                  <TableCell>
                    {bid.bidderName}
                  </TableCell>
                  <TableCell>
                    {bid.biddingTime}
                  </TableCell>
                  <TableCell>
                    ${bid.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    {bid.auto ? "Yes" : ""}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
