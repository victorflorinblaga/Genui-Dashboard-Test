import React from 'react';
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const PanelXYZ = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-80">
        <CardContent>
          <CardTitle className="text-center">
            Why don't scientists trust atoms?
          </CardTitle>
          <p className="text-center">Because they make up everything!</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PanelXYZ;