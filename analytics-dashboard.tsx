"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, Eye, Heart, Clock, Video, Users, Globe, Smartphone } from "lucide-react"

export function AnalyticsDashboard() {
  const metrics = [
    { label: "Total Views", value: "2.4M", change: "+12.5%", trend: "up", icon: Eye },
    { label: "Engagement Rate", value: "8.7%", change: "+2.1%", trend: "up", icon: Heart },
    { label: "Videos Created", value: "1,247", change: "+89", trend: "up", icon: Video },
    { label: "Watch Time", value: "45.2h", change: "+5.8h", trend: "up", icon: Clock },
  ]

  const topVideos = [
    { title: "Product Launch Demo", views: "245K", engagement: "12.3%", platform: "YouTube" },
    { title: "Tutorial Series Ep.1", views: "189K", engagement: "9.8%", platform: "TikTok" },
    { title: "Behind the Scenes", views: "156K", engagement: "15.2%", platform: "Instagram" },
    { title: "Customer Testimonial", views: "134K", engagement: "7.9%", platform: "LinkedIn" },
  ]

  const platformData = [
    { name: "YouTube", percentage: 45, color: "bg-red-500", icon: Video },
    { name: "TikTok", percentage: 28, color: "bg-black", icon: Smartphone },
    { name: "Instagram", percentage: 18, color: "bg-pink-500", icon: Heart },
    { name: "LinkedIn", percentage: 9, color: "bg-blue-600", icon: Users },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Analytics Dashboard</h2>
        <p className="text-blue-200">Track your video performance and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <Card key={index} className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-blue-400" />
                  <Badge
                    variant={metric.trend === "up" ? "default" : "secondary"}
                    className={metric.trend === "up" ? "bg-green-500" : "bg-red-500"}
                  >
                    {metric.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
                  <p className="text-sm text-gray-400">{metric.label}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Videos */}
        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Top Performing Videos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topVideos.map((video, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
                <div className="w-12 h-8 bg-gray-600 rounded flex items-center justify-center">
                  <Video className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium text-sm">{video.title}</h4>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>{video.views} views</span>
                    <span>{video.engagement} engagement</span>
                    <Badge variant="outline" className="text-xs border-white/20">
                      {video.platform}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Platform Distribution */}
        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Platform Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {platformData.map((platform, index) => {
              const Icon = platform.icon
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-gray-400" />
                      <span className="text-white text-sm">{platform.name}</span>
                    </div>
                    <span className="text-white text-sm font-medium">{platform.percentage}%</span>
                  </div>
                  <Progress value={platform.percentage} className="h-2" />
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>

      {/* Performance Trends */}
      <Card className="bg-white/10 border-white/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Performance Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400">Interactive charts would be displayed here</p>
              <p className="text-sm text-gray-500 mt-2">Showing views, engagement, and performance over time</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card className="bg-white/10 border-white/20">
        <CardHeader>
          <CardTitle className="text-white">AI-Powered Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
              <h4 className="text-white font-medium mb-2">Best Posting Time</h4>
              <p className="text-blue-200 text-sm">Your audience is most active on Tuesdays at 2-4 PM</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30">
              <h4 className="text-white font-medium mb-2">Content Recommendation</h4>
              <p className="text-green-200 text-sm">Tutorial videos perform 23% better than product demos</p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
              <h4 className="text-white font-medium mb-2">Optimization Tip</h4>
              <p className="text-yellow-200 text-sm">Adding captions increases engagement by 15%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
