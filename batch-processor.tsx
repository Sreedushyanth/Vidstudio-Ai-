"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Layers,
  Play,
  Download,
  Settings,
  Clock,
  Video,
  Palette,
  Users,
  Globe,
  Smartphone,
  Monitor,
} from "lucide-react"

export function BatchProcessor() {
  const [prompt, setPrompt] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [selectedVariations, setSelectedVariations] = useState(["cinematic", "realistic", "animated"])

  const variations = [
    { id: "cinematic", name: "Cinematic", icon: Video, color: "bg-purple-500" },
    { id: "realistic", name: "Realistic", icon: Users, color: "bg-blue-500" },
    { id: "animated", name: "Animated", icon: Palette, color: "bg-green-500" },
    { id: "documentary", name: "Documentary", icon: Globe, color: "bg-yellow-500" },
    { id: "commercial", name: "Commercial", icon: Smartphone, color: "bg-red-500" },
  ]

  const durations = [
    { value: "15", label: "15 seconds", platform: "TikTok/Instagram" },
    { value: "30", label: "30 seconds", platform: "YouTube Shorts" },
    { value: "60", label: "1 minute", platform: "Social Media" },
    { value: "300", label: "5 minutes", platform: "YouTube" },
    { value: "1800", label: "30 minutes", platform: "Long Form" },
  ]

  const platforms = [
    { id: "youtube", name: "YouTube", icon: Monitor, specs: "16:9, 1080p+" },
    { id: "tiktok", name: "TikTok", icon: Smartphone, specs: "9:16, 1080p" },
    { id: "instagram", name: "Instagram", icon: Smartphone, specs: "1:1, 9:16" },
    { id: "linkedin", name: "LinkedIn", icon: Monitor, specs: "16:9, 1080p" },
  ]

  const handleBatchGenerate = async () => {
    setIsProcessing(true)
    setProgress(0)

    // Simulate batch processing
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setProgress(i)
    }

    setIsProcessing(false)
  }

  const toggleVariation = (variationId: string) => {
    setSelectedVariations((prev) =>
      prev.includes(variationId) ? prev.filter((id) => id !== variationId) : [...prev, variationId],
    )
  }

  return (
    <div className="space-y-6">
      {/* Batch Configuration */}
      <Card className="bg-white/10 border-white/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Layers className="w-5 h-5" />
            Batch Video Generation
          </CardTitle>
          <p className="text-blue-200 text-sm">Generate multiple video variations from a single prompt</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-sm font-medium text-blue-200 mb-2 block">Master Prompt</label>
            <Textarea
              placeholder="Create a product demonstration video showing the key features and benefits of our new smartphone. Make it engaging and informative for different target audiences..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-32 bg-white/5 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Style Variations */}
            <div>
              <label className="text-sm font-medium text-blue-200 mb-3 block">
                Style Variations ({selectedVariations.length}/10)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {variations.map((variation) => {
                  const Icon = variation.icon
                  const isSelected = selectedVariations.includes(variation.id)
                  return (
                    <div
                      key={variation.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        isSelected
                          ? "bg-purple-500/20 border-purple-400"
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                      onClick={() => toggleVariation(variation.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${variation.color} flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">{variation.name}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Duration & Platform Settings */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-blue-200 mb-2 block">Duration Options</label>
                <Select defaultValue="30">
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map((duration) => (
                      <SelectItem key={duration.value} value={duration.value}>
                        <div>
                          <div className="font-medium">{duration.label}</div>
                          <div className="text-xs text-gray-400">{duration.platform}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-blue-200 mb-3 block">Target Platforms</label>
                <div className="space-y-2">
                  {platforms.map((platform) => {
                    const Icon = platform.icon
                    return (
                      <div key={platform.id} className="flex items-center space-x-3">
                        <Checkbox id={platform.id} defaultChecked />
                        <div className="flex items-center gap-2 flex-1">
                          <Icon className="w-4 h-4 text-gray-400" />
                          <label htmlFor={platform.id} className="text-white font-medium cursor-pointer">
                            {platform.name}
                          </label>
                          <Badge variant="secondary" className="text-xs">
                            {platform.specs}
                          </Badge>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={handleBatchGenerate}
              disabled={!prompt || selectedVariations.length === 0 || isProcessing}
              className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              {isProcessing ? (
                <>
                  <Settings className="w-4 h-4 mr-2 animate-spin" />
                  Processing Batch...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Generate {selectedVariations.length} Videos
                </>
              )}
            </Button>
            <Button variant="outline" className="border-white/20 text-white">
              <Settings className="w-4 h-4" />
            </Button>
          </div>

          {isProcessing && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-blue-200">Generating videos...</span>
                <span className="text-white">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Generated Videos Grid */}
      <Card className="bg-white/10 border-white/20">
        <CardHeader>
          <CardTitle className="text-white">Generated Videos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedVariations.map((variationId, index) => {
              const variation = variations.find((v) => v.id === variationId)
              if (!variation) return null

              const Icon = variation.icon
              return (
                <div key={index} className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                  <div className="aspect-video bg-black flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gray-400" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium">{variation.name} Style</h3>
                      <Badge variant="secondary" className="text-xs">
                        30s
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">Product demo in {variation.name.toLowerCase()} style</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 border-white/20 text-white">
                        <Play className="w-3 h-3 mr-1" />
                        Preview
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/20 text-white">
                        <Download className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Batch Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-blue-200">Total Generated</p>
                <p className="text-2xl font-bold text-white">247</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-sm text-blue-200">Avg. Time</p>
                <p className="text-2xl font-bold text-white">3.2m</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm text-blue-200">Success Rate</p>
                <p className="text-2xl font-bold text-white">96.8%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5 text-yellow-400" />
              <div>
                <p className="text-sm text-blue-200">Downloads</p>
                <p className="text-2xl font-bold text-white">1.2k</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
