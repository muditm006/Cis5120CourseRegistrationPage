import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import pennLogo from "@/assets/pennlogo.png";

export function CourseRegistration() {
  const [semester, setSemester] = useState("Spring 2026");
  const [instructionMethod, setInstructionMethod] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [onlinePrograms, setOnlinePrograms] = useState(false);
  const [dontOverlap, setDontOverlap] = useState(false);
  const [satisfiesRequirement, setSatisfiesRequirement] = useState(false);
  const [selectedCart, setSelectedCart] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
      {/* Header */}
      <div className="bg-[#011F5B] text-white px-4 py-3 flex items-center justify-between">
        <img src={pennLogo} alt="Penn Logo" className="h-8" />
        <span className="text-sm">Welcome, <span className="font-semibold">Mudit</span></span>
      </div>

      {/* Search Classes Banner */}
      <div className="bg-[#C41230] text-white px-4 py-4">
        <h1 className="text-2xl font-light">Search Classes</h1>
      </div>

      {/* Search Form */}
      <div className="p-4 space-y-4 bg-white">
        {/* Semester Dropdown */}
        <Select value={semester} onValueChange={setSemester}>
          <SelectTrigger className="w-full bg-white border-gray-300">
            <SelectValue placeholder="Select semester" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Spring 2026">Spring 2026</SelectItem>
            <SelectItem value="Fall 2025">Fall 2025</SelectItem>
            <SelectItem value="Summer 2025">Summer 2025</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Input */}
        <Input
          type="text"
          placeholder="Title, Subject, Instructor, Keyword"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white border-gray-300"
        />

        {/* Instruction Method Dropdown */}
        <Select value={instructionMethod} onValueChange={setInstructionMethod}>
          <SelectTrigger className="w-full bg-white border-gray-300">
            <SelectValue placeholder="Instruction Method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="in-person">In Person</SelectItem>
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="hybrid">Hybrid</SelectItem>
          </SelectContent>
        </Select>

        {/* Checkboxes */}
        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="online-programs"
              checked={onlinePrograms}
              onCheckedChange={(checked) => setOnlinePrograms(checked as boolean)}
              className="mt-0.5"
            />
            <label
              htmlFor="online-programs"
              className="text-sm text-gray-700 leading-tight cursor-pointer"
            >
              Find courses available to students in online programs
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="dont-overlap"
              checked={dontOverlap}
              onCheckedChange={(checked) => setDontOverlap(checked as boolean)}
              className="mt-0.5"
            />
            <label
              htmlFor="dont-overlap"
              className="text-sm text-gray-700 leading-tight cursor-pointer"
            >
              Don't Overlap Primary Cart
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="satisfies-requirement"
              checked={satisfiesRequirement}
              onCheckedChange={(checked) => setSatisfiesRequirement(checked as boolean)}
              className="mt-0.5"
            />
            <label
              htmlFor="satisfies-requirement"
              className="text-sm text-gray-700 leading-tight cursor-pointer"
            >
              Satisfies Missing Degree Requirement
            </label>
          </div>
        </div>

        {/* Search Button */}
        <button className="w-full bg-[#011F5B] text-white py-3 px-4 flex items-center justify-center space-x-2 hover:bg-[#012654] transition-colors">
          <ChevronRight className="w-5 h-5" />
          <span className="font-semibold tracking-wide">SEARCH</span>
        </button>
      </div>

      {/* Suggestions Section */}
      <div className="bg-gray-100 px-4 py-3">
        <h2 className="text-[#011F5B] font-bold text-sm mb-3">SUGGESTIONS</h2>
        <div className="space-y-2">
          <button className="w-full bg-[#011F5B] text-white py-3 px-4 flex items-center justify-between hover:bg-[#012654] transition-colors">
            <div className="flex items-center space-x-2">
              <ChevronRight className="w-5 h-5" />
              <span className="font-semibold tracking-wide">EXPLORE PROGRAMS</span>
            </div>
          </button>

          <button className="w-full bg-[#011F5B] text-white py-3 px-4 flex items-center justify-between hover:bg-[#012654] transition-colors">
            <div className="flex items-center space-x-2">
              <ChevronRight className="w-5 h-5" />
              <span className="font-semibold tracking-wide">DEGREE AUDIT & ADVISING</span>
            </div>
          </button>
        </div>
      </div>

      {/* Carts Section */}
      <div className="bg-gray-100 px-4 py-3 pb-6">
        <h2 className="text-[#011F5B] font-bold text-sm mb-3">CARTS</h2>
        <div className="space-y-3">
          <button className="w-full bg-[#011F5B] text-white py-3 px-4 flex items-center justify-between hover:bg-[#012654] transition-colors">
            <div className="flex items-center space-x-2">
              <ChevronRight className="w-5 h-5" />
              <span className="font-semibold tracking-wide">PRIMARY CART</span>
            </div>
          </button>

          <Select value={selectedCart} onValueChange={setSelectedCart}>
            <SelectTrigger className="w-full bg-white border-gray-300">
              <SelectValue placeholder="Select a Cart..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cart1">Cart 1</SelectItem>
              <SelectItem value="cart2">Cart 2</SelectItem>
              <SelectItem value="cart3">Cart 3</SelectItem>
            </SelectContent>
          </Select>

          <button className="w-full bg-[#011F5B] text-white py-3 px-4 flex items-center justify-between hover:bg-[#012654] transition-colors">
            <div className="flex items-center space-x-2">
              <ChevronRight className="w-5 h-5" />
              <span className="font-semibold tracking-wide">PRIMARY PLAN</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}