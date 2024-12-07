import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getNotifications = query({
  args: { userId: v.optional(v.union(v.string(), v.null())) },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("notifications")
      .filter((q) =>
        q.and(
          q.eq(q.field("userId"), args.userId),
          q.eq(q.field("isRead"), false)
        )
      )
      .order("desc")
      .take(10);
  },
});

export const markNotificationAsRead = mutation({
  args: { id: v.id("notifications") },
  handler: async (ctx, args) => {
    const { id } = args;

    await ctx.db.patch(id, { isRead: true });
  },
});

export const markAllNotificationsAsRead = mutation({
  args: { userId: v.optional(v.union(v.string(), v.null())) },
  handler: async (ctx, args) => {
    const unreadNotifications = await ctx.db
      .query("notifications")
      .filter((q) =>
        q.and(
          q.eq(q.field("userId"), args.userId),
          q.eq(q.field("isRead"), false)
        )
      )
      .order("desc")
      .collect();

    if (unreadNotifications.length > 0) {
      for (const notification of unreadNotifications) {
        await ctx.db.patch(notification._id, { isRead: true });
      }
    }
  },
});

export const createNotification = mutation({
  args: {
    text: v.string(),
    userId: v.string(),
    roomId: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("notifications", {
      userId: args.userId,
      text: args.text,
      roomId: args.roomId,
      isRead: false,
    });
  },
});
