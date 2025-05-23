"use client";

import { Button } from "@/components/ui/button";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTrigger,
} from "@/components/ui/stepper";
import { useState } from "react";
const steps = [1, 2, 3, 4];

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="mx-auto max-w-xl space-y-8 text-center min-w-[300px]">
      <div className="space-y-3">
        <Stepper value={currentStep} onValueChange={setCurrentStep}>
          {steps.map((step) => (
            <StepperItem key={step} step={step} className="flex-1">
              <StepperTrigger className="w-full flex-col items-start gap-2" asChild>
                <StepperIndicator asChild className="h-2 w-full rounded-none bg-border">
                  <span className="sr-only">{step}</span>
                </StepperIndicator>
              </StepperTrigger>
            </StepperItem>
          ))}
        </Stepper>
        <div className="text-sm font-medium tabular-nums text-muted-foreground">
          Step {currentStep} of {steps.length}
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          className="w-32"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          disabled={currentStep === 1}
        >
          Prev step
        </Button>
        <Button
          variant="outline"
          className="w-32"
          onClick={() => setCurrentStep((prev) => prev + 1)}
          disabled={currentStep >= steps.length}
        >
          Next step
        </Button>
      </div>
      <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
        Progress stepper
      </p>
    </div>
  );
}
