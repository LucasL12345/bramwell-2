import { useEquipmentList } from "@/hooks/use-equipment";
import { EquipmentCard } from "@/components/EquipmentCard";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function EquipmentPage() {
  const { data: equipment, isLoading, error } = useEquipmentList();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const categories = equipment 
    ? Array.from(new Set(equipment.map(e => e.category))) 
    : [];

  const filteredEquipment = equipment?.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? item.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-4xl font-display font-bold text-white mb-4">Our Equipment Range</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4">
          Professional-grade dehumidifiers and drying equipment tailored for every job size.
        </p>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search equipment..." 
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {error ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-red-100">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-slate-900 mb-2">Unable to load equipment</h2>
            <p className="text-muted-foreground">Please check your connection and try again.</p>
          </div>
        ) : isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-white rounded-xl border p-4 space-y-4">
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex justify-between pt-4">
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipment?.map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))}
            
            {filteredEquipment?.length === 0 && (
              <div className="col-span-full text-center py-20 bg-white rounded-xl">
                <p className="text-lg text-muted-foreground">No equipment found matching your criteria.</p>
                <Button 
                  variant="link" 
                  onClick={() => { setSearchTerm(""); setCategoryFilter(null); }}
                  className="mt-2"
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
