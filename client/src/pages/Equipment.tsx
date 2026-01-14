export default function EquipmentPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-4xl font-display font-bold text-white mb-4">Our Equipment Range</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4">
          Professional-grade dehumidifiers and drying equipment tailored for every job size.
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Equipment Information</h2>
            <p className="text-muted-foreground mb-6">
              For detailed information about our equipment range and rental options, please contact us directly.
            </p>
            <p className="text-slate-600">
              📞 Phone: 07738 128756<br/>
              📧 Email: enquiries@bramwellequipment.com<br/>
              ⏰ Hours: Daily 9:00am - 9:00pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
