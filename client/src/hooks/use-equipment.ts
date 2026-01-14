import { STATIC_EQUIPMENT } from "@/lib/static-data";

export function useEquipmentList() {
  return {
    data: STATIC_EQUIPMENT,
    isLoading: false,
    error: null
  };
}

export function useEquipment(id: number) {
  const equipment = STATIC_EQUIPMENT.find(e => e.id === id);
  return {
    data: equipment,
    isLoading: false,
    error: null
  };
}
