import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Your Dashboard</h1>
      <p className="mb-8">This is a minimal web application that you can modify and build upon.</p>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Placeholder Section</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Add your content here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;