import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneEditingLEDEffectArgs } from "./args/CreateOneEditingLEDEffectArgs";
import { EditingLEDEffect } from "../../../models/EditingLEDEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EditingLEDEffect)
export class CreateOneEditingLEDEffectResolver {
  @TypeGraphQL.Mutation(_returns => EditingLEDEffect, {
    nullable: false
  })
  async createOneEditingLEDEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEditingLEDEffectArgs): Promise<EditingLEDEffect> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).editingLEDEffect.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
